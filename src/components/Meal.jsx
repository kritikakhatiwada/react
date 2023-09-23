import React from "react";
import { useEffect, useState } from "react";
import { getMealCategories } from "../apis/meal";

export default function Meal() {
  console.log("mealCategories");
  const [mealCategories, setMealCategories] = useState([]);
  useEffect(() => {
    getMealCategories().then((res) => {
      setMealCategories(res?.categories);
    });
  }, []);
  return (
    <div className="max-w-lg m-auto">
      <div>
        {mealCategories?.map((category, index) => (
          <div key={index}>{category.strCategory}</div>
        ))}
      </div>
    </div>
  );
}
