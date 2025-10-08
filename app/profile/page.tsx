"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

type User = {
  fullName: string;
  email: string;
  address: string;
};

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        // save full profile details (not just email)
        const loggedInUser = {
          fullName: data.user.fullName,
          email: data.user.email,
          address: data.user.address,
        };

        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));

        // Clear form
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {!user ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

            <p className="mt-4 text-center text-sm">
              Don’t have an account?{" "}
              <Link href="/profile/SignUp" className="text-purple-500 hover:underline">
                Sign Up
              </Link>
            </p>

            {/* 🔑 Forgot password link */}
            <p className="mt-2 text-center text-sm">
              <Link href="/profile/ForgotPassword" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
            <p className="mb-2 text-center font-semibold">Full Name: {user.fullName}</p>
            <p className="mb-2 text-center">Email: {user.email}</p>
            <p className="mb-4 text-center">Address: {user.address}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
