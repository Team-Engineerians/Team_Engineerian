"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "~/lib/utils";

export const FlipWords = ({
  words,
  duration = 1000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState<string>(words[0] ?? ""); // Ensure it's always a string
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    if (words.length === 0) return;
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextIndex] ?? words[0] ?? ""); // Ensure it's always a string
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) startAnimation();
    }, duration);

    return () => clearInterval(interval);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.div
        key={currentWord} // Ensure animation runs on word change
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40, x: 40, filter: "blur(8px)", scale: 1.5 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className={cn("relative inline-block text-left text-white/50 px-2", className)}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={`${word}-${wordIndex}`}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wordIndex * 0.2, duration: 0.3 }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${word}-${letter}-${letterIndex}`}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: wordIndex * 0.2 + letterIndex * 0.05, duration: 0.2 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
