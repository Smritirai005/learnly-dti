"use client";

import React from "react";
import { FaLightbulb, FaRobot, FaLaptopCode, FaChartLine } from "react-icons/fa";

const FeatureCards = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Personalized Learning",
      description: "AI-generated courses tailored to your specific learning style, pace, and interests.",
    },
    {
      icon: <FaRobot className="text-4xl text-primary" />,
      title: "AI-Powered Content",
      description: "Advanced algorithms create comprehensive curriculum with the latest industry knowledge.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-secondary" />,
      title: "Interactive Exercises",
      description: "Learn by doing with hands-on projects and coding challenges to reinforce concepts.",
    },
    {
      icon: <FaChartLine className="text-4xl text-green-500" />,
      title: "Progress Tracking",
      description: "Monitor your advancement with detailed analytics and performance insights.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 py-8 px-4 md:px-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
