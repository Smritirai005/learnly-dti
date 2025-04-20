"use client";

import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user's preference or system setting
  useEffect(() => {
    // Check if user previously set a preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || 
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex justify-between p-5 shadow-sm items-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <Link href={'/'} className="flex justify-center items-center gap-2">
          <Image src={'/logo.png'} width={44} height={44} alt="Logo" />
          <span className="font-bold text-xl text-black dark:text-white transition-colors duration-300">AI Course Generator</span>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-5 cursor-pointer">
        <button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <MdLightMode className="text-2xl text-yellow-400" />
          ) : (
            <MdDarkMode className="text-2xl text-gray-700" />
          )}
        </button>
        <Link href={"https://github.com/Smritirai005/learnly-dti"}>
          <RxGithubLogo className="text-3xl text-black dark:text-white transition-colors duration-300" />
        </Link>
        <Link href={'/dashboard'}>
          <Button variant="startButton">Get started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;