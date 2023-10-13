import React from "react";

export default function Mealcard({ meal }) {
  return (
    <div>
      <img className="rounded-t-xl" src={meal?.strMealThumb} alt="" />
      <span className="p-3 text-[12px] flex items-center font-Croissant One">
        {meal?.strMeal}
      </span>
    </div>
  );
}
