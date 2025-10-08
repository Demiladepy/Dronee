"use client";

import React, { useState } from "react";
import LastPart from "../Component/lastPart/page";
import { motion } from "framer-motion";

// ---------------- Motion Wrapper ----------------
const MotionWrapper = ({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) => {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

// ---------------- Contact Page ----------------
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // 🔹 Handle input change with restriction for "name"
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      // Allow only letters and spaces
      const onlyLetters = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, [name]: onlyLetters });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 🔹 Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("All fields are required.");
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus("error");
      setErrorMsg("Network or server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Push content down so it doesn't overlap navbar */}
      <div className="pt-28 flex-grow">
        {/* Main Container */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">
          {/* Left Section - Contact Form */}
          <MotionWrapper direction="left">
            <div className="bg-white p-6 md:p-10 flex flex-col justify-center">
              <h2 className="text-sm uppercase mb-3">Contact Form</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Name"
                    pattern="^[A-Za-z\s]+$"
                    title="Name can only contain letters and spaces"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    rows={4}
                    placeholder="Your Message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {/* Feedback messages */}
                {status === "success" && (
                  <p className="text-green-600 text-sm mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm mt-2">❌ {errorMsg}</p>
                )}
              </form>
            </div>
          </MotionWrapper>

          {/* Right Section - Reach Out Info */}
          <MotionWrapper direction="right">
            <div className="bg-gray-800 text-white p-6 md:p-10 flex flex-col justify-center">
              <h2 className="text-sm uppercase mb-3">Get in Touch</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Reach <br /> Out to Us
              </h1>
              <p className="text-gray-300">
                Have a question or need assistance? Feel free to contact us using
                the form. Our team will get back to you as soon as possible.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Footer */}
      <LastPart />
    </div>
  );
}
