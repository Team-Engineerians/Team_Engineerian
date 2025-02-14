"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function OurWork() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="relative sm:m-h-screen w-full px-4 py-24 md:py-10 mt-10 sm:mt-16 md:mt-32">
      <h2 className="mx-auto max-w-7xl text-center font-sequel mb-12 sm:mb-0 text-5xl text-white sm:text-4xl md:text-5xl lg:text-[64px]">
        We&apos;ve Built
      </h2>
      <div className="mx-auto max-w-7xl">
        <Carousel items={cards} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="rounded-2xl bg-[#F5F5F7] p-4 sm:p-5 md:p-6 lg:p-8 dark:bg-neutral-800">
      <p className="mx-auto max-w-3xl font-sans text-xs text-neutral-600 sm:text-sm md:text-lg lg:text-xl dark:text-neutral-400">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          The first rule of Apple club is that you boast about Apple club.
        </span>{" "}
        Keep a journal, quickly jot down a grocery list, and take amazing class
        notes. Want to convert those notes to text? No problem.
      </p>
      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1614850523054-021550d516cb?w=500&h=500&auto=format&fit=crop&q=80"
          alt="Macbook mockup"
          height={300}
          width={300}
          className="h-auto w-full object-contain sm:w-[300px]"
        />
      </div>
    </div>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=500&auto=format&fit=crop&q=80",
    content: <DummyContent />,
  },
];

export default OurWork;