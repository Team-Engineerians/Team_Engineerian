"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "~/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "~/hooks/use-outside-click";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: (index: number) =>
    console.warn(`onCardClose called with index: ${index}`),
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 200 : 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full px-4">
        <div
          className="flex w-full space-x-4 overflow-x-auto scroll-smooth py-6 [scrollbar-width:none] md:py-10"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                },
              }}
              className="shrink-0"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Scroll Buttons */}
        {/* Scroll Buttons - Hidden on Small Screens */}
        <div className="hidden md:flex justify-end space-x-4 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="rounded-full bg-gray-200 p-3 shadow-md"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="rounded-full bg-gray-200 p-3 shadow-md"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index }: { card: Card; index: number }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  useOutsideClick(containerRef, () => setOpen(false));

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex h-screen items-center justify-center overflow-auto p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              ref={containerRef}
              className="relative max-w-2xl rounded-3xl bg-white p-6 dark:bg-neutral-900"
            >
              <button
                className="absolute right-4 top-4 rounded-full bg-gray-200 p-2"
                onClick={() => setOpen(false)}
              >
                <IconX className="h-6 w-6 text-black" />
              </button>
              <p className="text-lg font-medium text-gray-700">
                {card.category}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{card.title}</h2>
              <div className="mt-4">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(true)}
        className="relative h-[350px] w-full overflow-hidden rounded-3xl bg-gray-100 sm:h-[401px] sm:w-[400px] md:w-[500px] lg:w-[526px] dark:bg-neutral-900"
      >
        <div className="absolute inset-0 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-10 p-6">
          <p className="text-sm text-white">{card.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            {card.title}
          </h3>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({ src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || "Image"}
      {...rest}
    />
  );
};
