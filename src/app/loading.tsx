"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingScreen() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const readyTimer = setTimeout(() => setShowWelcome(true), 2000); // Show "Welcome to ENGX LAB."
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000); // Start fade-out before redirect
    const redirectTimer = setTimeout(() => router.push("/"), 5500); // Redirect after fade-out

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth fade-out before redirect
    >
      <AnimatePresence mode="wait">
        {!showWelcome ? (
          <motion.h1
            key="ready"
            className="text-5xl font-bold text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Are you ready?
          </motion.h1>
        ) : (
          <motion.h1
            key="welcome"
            className="text-5xl font-bold bg-gradient-to-r from-[#001217] via-[#002E36] to-[#004954] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Welcome to ENGX LAB.
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
