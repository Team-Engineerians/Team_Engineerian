"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(180, 230, 50)",   // Brighter green  
    "rgb(60, 255, 140)",   // Brighter teal  
    "rgb(50, 210, 255)",   // Brighter cyan  
    "rgb(10, 150, 255)",   // Brighter blue  
    "rgb(140, 50, 255)",   // Brighter violet  
    "rgb(210, 50, 255)",   // Brighter magenta  
    "rgb(255, 20, 200)",   // Brighter pink  
    "rgb(255, 80, 120)",   // Brighter red  
    "rgb(255, 120, 90)",   // Brighter orange-red  
    "rgb(255, 160, 60)",   // Brighter orange  
];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-rustic text-[50px] sm:text-[70px] tracking-tight"
    >
      {char}
    </motion.span>
  ));
}

export default ColourfulText;
