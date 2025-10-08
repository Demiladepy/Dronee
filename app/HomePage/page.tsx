"use client";
import { motion } from "framer-motion";
import SubscriptionForm from "@/app/Component/Subcription/page";
import AllProduct from "@/app/Component/AllProduct/Page";
import ShopNow from "../Component/button/ShopNow/page";
import Link from "next/link";
import LastPart from "@/app/Component/lastPart/page";

export default function Body() {
  return (
    <div className="w-full overflow-x-hidden"> {/*  prevent sideways scroll */}
      {/* 🔷 First Section with Background Image */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat px-6 py-16 md:px-10 md:py-20 min-h-[400px] md:min-h-[600px] flex items-center justify-center"
        style={{ backgroundImage: `url('/Images/pic2.avif')` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center"
        >
          NEXT-GEN DRONES
        </motion.h1>
      </section>

      {/* 🔷 Three-column layout (form, image, text) */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-4 py-12 md:px-12 md:py-20 max-w-7xl mx-auto">
        {/* Subscription Form */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <SubscriptionForm />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 w-full flex justify-center"
        >
          <img
            src="/Images/pic1.avif"
            alt="A drone flying in the sky"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg h-auto object-cover"
          />
        </motion.div>

        {/* Discover Drones Text */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Discover Drones
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At P. Mbali, we are your go-to destination for cutting-edge drones and
            aerial technology. Our knowledgeable staff and interactive displays
            provide you with the opportunity to explore and compare various drone
            models firsthand.
          </p>
          <ShopNow />
        </motion.div>
      </div>

      {/* 🔷 Second Hero Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat px-6 py-16 md:px-10 md:py-20 rounded-xl min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url('/Images/pic3.avif')` }}
      >
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/40 rounded-xl" />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10 md:gap-24 max-w-7xl w-full"
        >
          {/* left column */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow">
              Your Drone Destination
            </h1>
          </motion.div>

          {/* right column */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-lg text-center md:text-left"
          >
            <p className="mb-6 leading-relaxed text-white text-lg">
              Experience the thrill of drone technology with us. Test our drone
              models, learn about their capabilities, and find the perfect drone to
              match your needs.
            </p>
            <Link href="/about">
              <button className="inline-block bg-purple-600 text-white px-6 py-3 hover:bg-purple-700 transition rounded-2xl text-sm md:text-base shadow-md">
                Discover more
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 🔷 Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-4 py-12 md:px-12 md:py-20 max-w-7xl mx-auto"
      >
        <AllProduct />
      </motion.div>

      {/* 🔷 Mission & Values Section */}
      <div className="flex flex-col md:flex-row items-stretch bg-white max-w-7xl mx-auto">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/Images/pic4.avif"
            alt="Drone photography"
            className="w-full h-full object-cover min-h-[250px] md:min-h-[300px] rounded-xl shadow-md"
          />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-gray-50 rounded-xl"
        >
          <div className="max-w-md mx-auto w-full text-center md:text-left space-y-8">
            {/* Our Mission */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At P. Mbali, we are dedicated to providing exceptional drone solutions
                that cater to the diverse needs of our customers. Our commitment
                extends to promoting safe drone usage and enhancing the overall drone
                experience for enthusiasts and professionals alike.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Our Values
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We prioritize customer satisfaction, innovation, and community
                engagement. Our values drive us to deliver high-quality products,
                expert guidance, and educational workshops to empower drone users.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🔷 FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row min-h-[400px] md:min-h-[600px] overflow-hidden"
      >
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gray-800 text-white flex flex-col justify-center p-10 md:p-16 text-center md:text-left">
          <p className="text-sm mb-4 uppercase tracking-wide">FAQs</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Common <br className="hidden md:block" /> Inquiries <br className="hidden md:block" /> Answered
          </h1>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 bg-yellow-100 p-8 md:p-12 overflow-y-auto flex flex-col gap-10">
          {/* Question 1 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 border-b border-gray-400 pb-2">
              Are drones easy to fly?
            </h2>
            <p className="text-gray-700">
              Yes, most consumer drones are designed for easy operation, with features
              like auto-takeoff and landing making them accessible to beginners.
            </p>
          </div>

          {/* Question 2 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 border-b border-gray-400 pb-2">
              What is the range of drone cameras?
            </h2>
            <p className="text-gray-700">
              Drone cameras can have varying ranges depending on the model, with some
              professional drones offering up to several kilometers of transmission
              distance.
            </p>
          </div>

          {/* Question 3 */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-2 border-b border-gray-400 pb-2">
              How long do drone batteries last?
            </h2>
            <p className="text-gray-700">
              Battery life differs among drones, typically ranging from 15 to 30
              minutes of flight time based on the model and usage.
            </p>
          </div>
        </div>
      </motion.section>

      {/* 🔷 Final Promo Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative bg-cover bg-center min-h-[400px] md:min-h-[600px] flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/Images/pic5.avif')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-lg mx-4 md:ml-8 bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg text-center md:text-left">
          <p className="text-sm text-gray-700">Don't Miss Out</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Offers Await
          </h1>
          <p className="text-gray-800 mb-6">
            Exclusive offers await! Enjoy amazing deals and special promotions just for you.
            Don’t miss these unique benefits—act now!
          </p>
          <ShopNow />
        </div>
      </motion.div>

      <LastPart />
    </div>
  );
}
