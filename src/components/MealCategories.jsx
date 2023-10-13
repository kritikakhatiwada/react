import React from "react";

export default function MealCategories({
  categories,
  onCategorySelected,
  selectedCategory,
}) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 text-center justify-center">
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
                                text-red-600 hover:bg-red-200 cursor-pointer
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
