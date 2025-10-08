"use client";
import React, { useState } from "react";
import Link from "next/link";

const SubscriptionForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean }>({});
  const [shake, setShake] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error on typing
    setErrors((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { name?: boolean; email?: boolean } = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    // Simulate expired offer
    const offerExpired = true;
    if (offerExpired) {
      setShowModal(true);
      return;
    }

    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`max-w-md w-full mx-auto p-6 bg-white shadow-2xl rounded-xl backdrop-blur-sm transition-transform ${
          shake ? "animate-shake" : ""
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Subscribe to our Newsletter
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            suppressHydrationWarning
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-2 border-red-500 focus:ring-red-500"
                : "border border-gray-700 focus:ring-purple-500"
            }`}
            placeholder="Your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            suppressHydrationWarning
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-md bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-2 border-red-500 focus:ring-red-500"
                : "border border-gray-700 focus:ring-purple-500"
            }`}
            placeholder="you@example.com"
          />
        </div>

        <button
          suppressHydrationWarning
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
        >
          Subscribe
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              This offer is expired
            </h3>
            <p className="mb-4 text-gray-600">
              Please create a profile to continue.
            </p>
            <Link href="/profile">
              <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                Create Profile
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionForm;
