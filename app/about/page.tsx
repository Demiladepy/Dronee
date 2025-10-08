
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      {/* Main wrapper with padding-top for fixed navbar */}
      <div className="min-h-screen bg-gray-100 pt-20 md:pt-24">
        {/* 🔹 First Section (Vision + Why Choose Us) */}
        <section className="p-8 md:p-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 mb-2"
          >
            Welcome
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-10"
          >
            Explore Innovative Drones
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
              <p className="text-gray-700">
                At P. Mbali, we are dedicated to providing cutting-edge drones
                and aerial technology to our customers. With interactive
                displays and expert staff, we offer a unique hands-on experience
                to help you find the perfect drone for your needs.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow p-6"
            >
              <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
              <p className="text-gray-700">
                Discover the difference at P. Mbali. From affordable consumer
                drones to advanced models with thermal imaging, we cater to both
                hobbyists and professionals. Our community workshop on safe
                drone operation reflects our commitment to responsible flying.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 🔹 Second Section (Mission + Values + Promise with BG image) */}
        <section className="relative w-full min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/Images/pic6.avif"
            alt="Drone Background"
            fill
            className="object-cover brightness-75"
            priority
          />

          {/* Overlay Card aligned RIGHT */}
          <div className="relative w-full flex justify-end pr-6 md:pr-16">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-xl"
            >
              <h3 className="text-sm text-gray-600">About Us</h3>
              <h1 className="text-4xl font-bold mb-6">Our Mission</h1>

              <div className="space-y-6 text-gray-700">
                {/* Our Values */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-2">Our Values</h2>
                  <p>
                    P. Mbali is more than a store; it's a hub for drone
                    enthusiasts. We aim to provide high-quality products and
                    exceptional service to elevate your aerial experience.
                  </p>
                </motion.div>

                {/* Our Promise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
                  <p>
                    We promise to deliver top-notch customer service and expert
                    advice to ensure you make the most of your drone purchase.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 🔹 Team Section */}
        <section className="py-12 px-6">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 text-base md:text-lg">Meet Our Team</p>
            <h1 className="mt-2 text-2xl md:text-4xl lg:text-5xl text-gray-900">
              Get to know the passionate individuals <br className="hidden md:block" />
              NEXT-GEN DRONES
            </h1>
          </motion.div>

          {/* Team layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about/sophie.avif"
                alt="Sophie Johnson"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl flex flex-col items-center justify-center p-8 text-center"
            >
              <h2 className="text-2xl font-semibold">Sophie Johnson</h2>
              <p className="text-gray-500 mt-2">Sales Manager</p>
            </motion.div>

            {/* Drone controller image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about/drone-controller.avif"
                alt="Drone Controller"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Dark text card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 text-white rounded-2xl flex flex-col items-center justify-center p-8 text-center"
            >
              <h2 className="text-2xl font-semibold">Aiden Patel</h2>
              <p className="mt-2">Product Specialist</p>
            </motion.div>

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about/aiden.avif"
                alt="Aiden Patel"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* 🔹 Drone + Team Section */}
        <section className="bg-gray-100 py-12 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
            {/* Left: Flying drone full height */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <img
                src="/images/about/drone-flying.avif"
                alt="Flying Drone"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right: Team cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Dark text card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 text-white rounded-2xl flex flex-col items-center justify-center p-6 text-center"
              >
                <h2 className="text-xl md:text-2xl font-semibold">Liam Garcia</h2>
                <p className="mt-2 text-sm md:text-base">Technical Expert</p>
              </motion.div>

              {/* Portrait image (Liam) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/about/liam.avif"
                  alt="Liam Garcia"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Portrait image (Ella Wong) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <img
                  src="/images/about/ella.avif"
                  alt="Ella Wong"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* White text card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl flex flex-col items-center justify-center p-6 text-center"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Ella Wong
                </h2>
                <p className="text-gray-500 mt-2 text-sm md:text-base">
                  Customer Support
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
