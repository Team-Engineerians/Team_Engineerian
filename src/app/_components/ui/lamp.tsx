"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 50, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        What We Do
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden py-20 w-full bg-black", // Optional: bg-black for testing visibility
        className
      )}
    >
      {/* Lamp Effect */}
      <motion.div
        initial={{ opacity: 0.4, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute top-[-10rem] h-[22rem] w-[50rem] rounded-full bg-gradient-radial from-cyan-500 via-transparent to-transparent blur-2xl opacity-70"
      />

      {/* Text Content */}
      <div className="relative z-50">{children}</div>
    </div>
  );
};
