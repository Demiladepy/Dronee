"use client";

import React, { useState } from "react";
import Link from "next/link";
import LastPart from "../Component/lastPart/page";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "HD Camera Drone", price: 199, image: "/Images/all-product/HD Camera Drone.avif", type: "Professional", color: "Black", batteryOption: "Extra Battery", batteryType: "Li-ion" },
  { id: 2, name: "Beginner photography drone", price: 249, image: "/images/all-product/Beginner photography drone.avif", type: "Consumer", color: "Blue", batteryOption: "Single Battery", batteryType: "Li-Po" },
  { id: 3, name: "Drone Replacement Battery", price: 179, image: "/images/all-product/Drone Replacement Battery.avif", type: "Accessory", color: "Red", batteryOption: "Extra Battery", batteryType: "NiMH" },
  { id: 4, name: "Travel friendly Drone", price: 299, image: "/images/all-product/Travel friendly Drone.avif", type: "Consumer", color: "White", batteryOption: "Single Battery", batteryType: "Li-ion" },
  { id: 5, name: "real estate photography drone", price: 219, image: "/Images/all-product/real estate photography drone.avif", type: "Professional", color: "Black", batteryOption: "Extra Battery", batteryType: "Li-Po" },
  { id: 6, name: "Drone carrying case", price: 189, image: "/images/all-product/drone carrying case.avif", type: "Accessory", color: "Blue", batteryOption: "Single Battery", batteryType: "NiMH" },
  { id: 7, name: "4k filming drone", price: 209, image: "/images/all-product/4k filming drone.avif", type: "Consumer", color: "Red", batteryOption: "Extra Battery", batteryType: "Li-ion" },
  { id: 8, name: "Propeller Guard Set", price: 159, image: "/images/all-product/Propeller Guard Set.avif", type: "Accessory", color: "White", batteryOption: "Single Battery", batteryType: "Li-Po" },
  { id: 9, name: "Thermal imaging drone", price: 279, image: "/images/all-product/Thermal imaging drone.avif", type: "Professional", color: "Black", batteryOption: "Extra Battery", batteryType: "Li-ion" },
];

// 🔹 Animation Wrapper
const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function ShopAllPage() {
  // Sidebar sections open/close
  const [openSections, setOpenSections] = useState({
    productType: true,
    price: true,
    batteryOption: true,
    batteryType: true,
    color: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Filters
  const [filters, setFilters] = useState({
    types: [] as string[],
    colors: [] as string[],
    batteryOptions: [] as string[],
    batteryTypes: [] as string[],
    price: 500,
  });

  // Checkbox handler
  const handleCheckbox = (
    filterCategory: "types" | "colors" | "batteryOptions" | "batteryTypes",
    value: string
  ) => {
    setFilters((prev) => {
      const alreadySelected = prev[filterCategory].includes(value);
      return {
        ...prev,
        [filterCategory]: alreadySelected
          ? prev[filterCategory].filter((v) => v !== value)
          : [...prev[filterCategory], value],
      };
    });
  };

  // Price slider handler
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, price: Number(e.target.value) }));
  };

  // Filtering logic
  const filteredProducts = products.filter((p) => {
    const matchesType = filters.types.length === 0 || filters.types.includes(p.type);
    const matchesColor = filters.colors.length === 0 || filters.colors.includes(p.color);
    const matchesBatteryOption = filters.batteryOptions.length === 0 || filters.batteryOptions.includes(p.batteryOption);
    const matchesBatteryType = filters.batteryTypes.length === 0 || filters.batteryTypes.includes(p.batteryType);
    const matchesPrice = p.price <= filters.price;

    return matchesType && matchesColor && matchesBatteryOption && matchesBatteryType && matchesPrice;
  });

  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen pt-20 px-4">
        {/* Sidebar always visible */}
        <aside className="w-full lg:w-64 bg-white  p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="font-semibold mb-4 text-lg">Filter by</h2>

          {/* Product Type */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center font-medium text-gray-700"
              onClick={() => toggleSection("productType")}
            >
              Product Type
              <span>{openSections.productType ? "−" : "+"}</span>
            </button>
            {openSections.productType && (
              <div className="mt-3 space-y-2 text-sm">
                {["Professional", "Consumer", "Accessory"].map((t) => (
                  <label key={t} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.types.includes(t)}
                      onChange={() => handleCheckbox("types", t)}
                    />{" "}
                    {t} Drones
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center font-medium text-gray-700"
              onClick={() => toggleSection("price")}
            >
              Price
              <span>{openSections.price ? "−" : "+"}</span>
            </button>
            {openSections.price && (
              <div className="mt-3 text-sm">
                <input
                  type="range"
                  min="100"
                  max="500"
                  value={filters.price}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">Up to ${filters.price}</p>
              </div>
            )}
          </div>

          {/* Battery Options */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center font-medium text-gray-700"
              onClick={() => toggleSection("batteryOption")}
            >
              Battery Options
              <span>{openSections.batteryOption ? "−" : "+"}</span>
            </button>
            {openSections.batteryOption && (
              <div className="mt-3 space-y-2 text-sm">
                {["Extra Battery", "Single Battery"].map((b) => (
                  <label key={b} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.batteryOptions.includes(b)}
                      onChange={() => handleCheckbox("batteryOptions", b)}
                    />{" "}
                    {b}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Battery Type */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center font-medium text-gray-700"
              onClick={() => toggleSection("batteryType")}
            >
              Battery Type
              <span>{openSections.batteryType ? "−" : "+"}</span>
            </button>
            {openSections.batteryType && (
              <div className="mt-3 space-y-2 text-sm">
                {["Li-ion", "Li-Po", "NiMH"].map((bt) => (
                  <label key={bt} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.batteryTypes.includes(bt)}
                      onChange={() => handleCheckbox("batteryTypes", bt)}
                    />{" "}
                    {bt}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Color */}
          <div className="mb-6">
            <button
              className="w-full flex justify-between items-center font-medium text-gray-700"
              onClick={() => toggleSection("color")}
            >
              Color
              <span>{openSections.color ? "−" : "+"}</span>
            </button>
            {openSections.color && (
              <div className="mt-3 space-y-2 text-sm">
                {["Black", "Blue", "Red", "White"].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.colors.includes(c)}
                      onChange={() => handleCheckbox("colors", c)}
                    />{" "}
                    {c}
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 className="text-2xl font-bold">All Products</h1>
            <select className="p-2 rounded-md text-sm border bg-white shadow-sm">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <AnimationWrapper key={product.id}>
                  <Link href={`/product/${product.id}`}>
                    <div className="p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer bg-white">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded"
                      />
                      <h3 className="mt-3 font-medium">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                    </div>
                  </Link>
                </AnimationWrapper>
              ))
            ) : (
              <p className="text-gray-500">No products match your filters.</p>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12">
        <LastPart />
      </footer>
    </div>
  );
}
