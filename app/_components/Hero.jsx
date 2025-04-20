import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import FeatureCards from "./FeatureCards";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <section className="min-h-screen bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-2 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
              <span className="text-gray-900 dark:text-white"> AI Course </span>Generator.
              <strong className="mt-12 font-medium text-3xl text-gray-900 dark:text-white sm:block">
                Custom Learning paths, Powered By AI.
              </strong>
            </h1>

            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              Unlock personalized education with AI-driven course creation.
              Tailor your learning journey to fit your unique goals and pace.
            </p>

            <div className="mt-20 flex flex-wrap justify-center gap-4 cursor-pointer">
              <Link href={"/explore-course"}>
                <Button variant="startButton" size="lg">
                  Explore Now.
                  <HiChevronDoubleRight className="text-xl ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FeatureCards included */}
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <FeatureCards />
      </section>
    </div>
  );
};

export default Hero;
