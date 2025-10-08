
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react"; // cancel/remove icon

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const cartKey = user ? "userCart" : "guestCart";
    const savedCart = localStorage.getItem(cartKey);

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateLocalStorage = (newCart: any[]) => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const cartKey = user ? "userCart" : "guestCart";
    localStorage.setItem(cartKey, JSON.stringify(newCart));
  };

  const handleRemoveItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle place order
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Order placed! Total: $${totalPrice.toFixed(2)}`);

    // Clear cart
    setCart([]);
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const cartKey = user ? "userCart" : "guestCart";
    localStorage.removeItem(cartKey);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-28 text-center p-10">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-6 pb-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  {item.quantity} × ${item.price}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <p className="font-bold">${item.price * item.quantity}</p>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        ))}

        <div className="text-right mt-6">
          <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>

          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            onClick={handlePlaceOrder}
          >
            Place Your Order
          </button>
        </div>
      </div>
    </div>
  );
}
