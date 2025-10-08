'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  { id: 1, name: "HD Camera Drone", price: "$199", image: "/Images/all-product/HD Camera Drone.avif" },
  { id: 2, name: "Beginner photography drone", price: "$249", image: "/images/all-product/Beginner photography drone.avif" },
  { id: 3, name: "Drone Replacement Battery", price: "$179", image: "/images/all-product/Drone Replacement Battery.avif" },
  { id: 4, name: "Travel friendly Drone", price: "$299", image: "/images/all-product/Travel friendly Drone.avif" },
  { id: 5, name: "Real estate photography drone", price: "$219", image: "/Images/all-product/real estate photography drone.avif" },
  { id: 6, name: "Drone carrying case", price: "$189", image: "/images/all-product/drone carrying case.avif" },
  { id: 7, name: "4k filming drone", price: "$209", image: "/images/all-product/4k filming drone.avif" },
  { id: 8, name: "Propeller Guard Set", price: "$159", image: "/images/all-product/Propeller Guard Set.avif" },
  { id: 9, name: "Thermal imaging drone", price: "$279", image: "/images/all-product/Thermal imaging drone.avif" },
];

const AllProduct = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-12 flex justify-center rounded-4xl">
      <div className="bg-gray-300 rounded-xl px-6 py-10 max-w-[1400px] w-full relative">
        <h2 className="text-3xl font-bold text-center mb-8">All Products</h2>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full shadow hover:bg-white/50 transition"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white/30 backdrop-blur-md p-3 rounded-full shadow hover:bg-white/50 transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-hidden scroll-smooth px-2"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[380px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[340px] object-cover"
              />

              {/* View Details Button */}
              <div className="px-5 pt-4">
                <Link href={`/products/${product.id}`}>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                    View Details
                  </button>
                </Link>
              </div>

              {/* Product Info */}
              <div className="p-5 pt-4">
                <h3 className="text-black">{product.name}</h3>
                <p className="text-gray-700 text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
