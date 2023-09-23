import React from "react";
import Search from "./Search";

function DrinkCategories({ categories, onCategorySelected, selectedCategory }) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item, index) => (
          <span
            onClick={() => {
              onCategorySelected(item.strCategory);
            }}
            key={index}
            className={`
                                p-2 rounded-lg border-[1px]
                                border-red-300 text-[12px]
                                text-center justify-center
                                text-red-600 hover:bg-blue-200
                            ${
                              selectedCategory === item?.strCategory
                                ? "border-none drop-shadow-md text-red-600 bg-red-200"
                                : "drop-shadow-xs text-red-600 bg-white"
                            }
                            `}
          >
            {item?.strCategory}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DrinkCategories;
