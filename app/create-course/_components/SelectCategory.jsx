import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

const SelectCategory = () => {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 text-lg font-semibold">Select the course category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {CategoryList.map((item) => {
          const isSelected = userCourseInput.category === item.name;

          return (
            <div
              key={item.name}
              onClick={() => handleCategoryChange(item.name)}
              className={`
                relative h-40 rounded-xl overflow-hidden cursor-pointer transform transition
                ${isSelected ? "ring-4 ring-primary" : "ring-1 ring-gray-200 dark:ring-gray-700"}
                hover:scale-105
              `}
            >
              {/* Background Image */}
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-cover"
              />

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Category Name */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-white text-xl font-semibold">
                  {item.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectCategory;
;;