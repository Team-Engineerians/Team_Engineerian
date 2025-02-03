"use client";

import { useState, useEffect } from "react";
import Loader from "../loading";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 6000); // Show loader for 3 sec
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loader /> : children;
}
