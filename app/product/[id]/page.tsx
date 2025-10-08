"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "@/app/data/products";

interface Product {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
}

interface CartItem {
  id: number | string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p: Product) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center p-10">❌ Product not found</div>;
  }

  // ✅ Safely normalize price
  let displayPrice: number;
  if (typeof product.price === "string") {
    displayPrice = parseFloat(product.price.replace(/[^0-9.]/g, "")) || 0;
  } else if (typeof product.price === "number") {
    displayPrice = product.price;
  } else {
    displayPrice = 0;
  }

  // ✅ Add to cart function
  const addToCart = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const cartKey = user ? "userCart" : "guestCart";

    let currentCart: CartItem[] = JSON.parse(localStorage.getItem(cartKey) || "[]");

    const existing = currentCart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      currentCart.push({
        id: product.id,
        name: product.name,
        price: displayPrice,
        image: product.image,
        quantity,
      });
    }

    localStorage.setItem(cartKey, JSON.stringify(currentCart));
    alert("✅ Added to cart!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Breadcrumbs */}
      <div className="text-gray-600 mb-6 text-sm">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /{" "}
        <Link href="/contents/shop" className="hover:underline">
          All Products
        </Link>{" "}
        / <span className="text-gray-500">{product.name}</span>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-3">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-6">${displayPrice}</p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-2">
              Quantity *
            </label>
            <div className="flex items-center border w-28">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 text-xl"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            className="w-full md:w-80 py-3 border rounded-full hover:bg-black hover:text-white transition mb-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
