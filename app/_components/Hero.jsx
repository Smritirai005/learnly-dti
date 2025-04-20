"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HiChevronDoubleRight } from "react-icons/hi";
import Lottie from "lottie-react";
import FeatureCards from "./FeatureCards";
import { motion } from "framer-motion";  // Import framer-motion

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center py-24 px-6">
          {/* Text content with animation */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}  // Initial state for animation
            animate={{ opacity: 1, y: 0 }}   // Final state for animation
            transition={{ duration: 1 }}      // Transition settings
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight
                           bg-gradient-to-r from-purple-400 via-pink-500 to-red-400
                           bg-clip-text text-transparent">
              Empower Your Learning Journey with AI
            </h1>
            <p className="max-w-md text-gray-300">
              Discover personalized AI-generated courses tailored just for you.
            </p>
            <div className="pt-6">
              <Link href="/explore-course">
                <Button variant="startButton" size="lg">
                  Explore Now <HiChevronDoubleRight className="ml-2 text-xl" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Lottie animation with animation */}
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0 }}   // Initial state for animation
            animate={{ opacity: 1 }}    // Final state for animation
            transition={{ duration: 1.5, delay: 0.3 }}  // Delay to sync with text
          >
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-auto"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* FeatureCards Section */}
      <section className="bg-white dark:bg-gray-900">
        <FeatureCards />
      </section>
    </div>
  );
}
