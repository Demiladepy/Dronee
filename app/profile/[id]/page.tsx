
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  items: CartItem[];
  total: number;
  status: string;
};

type User = {
  _id: string;
  fullName: string;
  email: string;
  address?: string;
  avatar?: string;
  cart: CartItem[];
  orders: Order[];
  createdAt: string;
};

export default function ProfilePage() {
  const { id } = useParams();
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ---------------- Fetch profile ----------------
  useEffect(() => {
    const fetchProfile = async (userId: string) => {
      try {
        const res = await fetch(`/api/profile/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    const storedUser = localStorage.getItem("user");
    const userId = id || (storedUser ? JSON.parse(storedUser)._id : null);

    if (!userId) {
      setError("User ID missing");
      setLoading(false);
      return;
    }

    fetchProfile(userId);
  }, [id]);

  // ---------------- Upload avatar ----------------
  const handleAvatarUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAvatar || !user?._id) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result;
      try {
        const res = await fetch(`/api/profile/${user._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ avatar: base64 }),
        });
        const data = await res.json();
        if (res.ok) setUser(data.user);
        else console.error(data.error);
      } catch (err) {
        console.error("Error uploading avatar:", err);
      } finally {
        setNewAvatar(null);
      }
    };
    reader.readAsDataURL(newAvatar);
  };

  // ---------------- Logout ----------------
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (err) {
      console.error(err);
    } finally {
      localStorage.removeItem("user");
      setUser(null);
      router.push("/profile/Login");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!user) return <p className="text-center mt-10">Profile not found.</p>;

  const cartTotal = user.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalSpentOrders = user.orders.reduce((sum, order) => sum + order.total, 0);
  const totalSpentOverall = cartTotal + totalSpentOrders;

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex justify-center items-start">
      <div className="bg-white w-full max-w-3xl rounded-xl shadow-md p-6 mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500"
            />
          ) : (
            <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              No Pic
            </div>
          )}
          <form onSubmit={handleAvatarUpload} className="mt-4 flex flex-col items-center">
            <label className="mb-2 font-medium">Upload Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewAvatar(e.target.files?.[0] || null)}
              className="mb-2"
            />
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Upload Picture
            </button>
          </form>
        </div>

        {/* User Info */}
        <div className="text-center mb-6">
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address || "No address added"}</p>
          <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          <p><strong>Total Spent (Cart + Orders):</strong> ${totalSpentOverall}</p>
        </div>

        {/* Cart */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">My Cart</h2>
          {user.cart.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.cart.map((item, i) => (
                <div key={i} className="p-4 border rounded shadow-sm bg-gray-50">
                  <p className="font-semibold">{item.name}</p>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
              ))}
              <p className="mt-2 font-semibold col-span-full">Cart Total: ${cartTotal}</p>
            </div>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Orders */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">My Orders</h2>
          {user.orders.length > 0 ? (
            <div className="space-y-4">
              {user.orders.map((order, i) => (
                <div key={i} className="p-4 border rounded shadow-sm bg-gray-50">
                  <p className="font-semibold">Order #{i + 1}</p>
                  <p>Status: {order.status}</p>
                  <p>Total: ${order.total}</p>
                  <ul className="ml-4 list-disc">
                    {order.items.map((it, j) => (
                      <li key={j}>{it.name} - {it.quantity} × ${it.price}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="mt-2 font-semibold">Total Spent on Orders: ${totalSpentOrders}</p>
            </div>
          ) : (
            <p className="text-gray-600">No orders yet.</p>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
