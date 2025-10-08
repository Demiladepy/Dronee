"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionWrapperProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export default function MotionWrapper({ 
  children, 
  direction = "up", 
  delay = 0 
}: MotionWrapperProps) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  };

  return (
    <motion.div 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
