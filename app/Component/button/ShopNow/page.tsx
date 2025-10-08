import React from "react";
import Link from "next/link"; 

const ShopNow = () => {
  return (
    <div>
      <Link href="/ShopAll">
        <button className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700 transition rounded-2xl">
          SHOP NOW
        </button>
      </Link>
    </div>
  );
};

export default ShopNow;
