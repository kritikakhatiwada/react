import React from "react";
import { useEffect, useState } from "react";
import {
  getMealByCategory,
  getMealCategories,
  getMealByName,
  getMealByFirstLetter,
} from "../apis/meal";
import Search from "./Search";
import MealCategories from "./MealCategories";
import Mealcard from "./cards/Mealcard";
import { Link } from "react-router-dom";

export default function Meal() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [meals, setMeals] = useState([]);
  const [mealsByFirstLetter, setMealsByFirstLetter] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("a");
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  useEffect(() => {
    document.title = "Meals";
    getMealCategories().then((resp) => {
      setCategories(resp?.categories);
    });
  }, []);

  useEffect(() => {
    console.log("1");
    getMealByCategory(selectedCategory).then((res) => {
      setMeals(res?.meals);
    });
  }, [selectedCategory]);

  useEffect(() => {
    getMealByFirstLetter(selectedLetter)
      .then((res) => {
        setMealsByFirstLetter(res?.meals);
      })
      .catch(() => {});
  }, [selectedLetter]);

  const fetchMealByName = (name) => {
    getMealByName(name).then((res) => {
      setMeals(res?.meals);
    });
  };

  return (
    <div className="max-w-6xl m-auto my-2 flex flex-col gap-4 ">
      <MealCategories
        selectedCategory={selectedCategory}
        categories={categories}
        onCategorySelected={(category) => {
          setSelectedCategory(category);
        }}
      />

      <Search
        onClickSearchButton={(name) => {
          fetchMealByName(name);
        }}
      />

      <h2 className="font-bold">Meals By Category</h2>

      <div className="grid grid-cols-5 gap-2">
        {meals?.map((item, index) => (
          <Link
            to={`/meals/${item?.idMeal}`}
            className="cursor-pointer hover:shadow-md hover:rounded-md "
            key={index}
          >
            <Mealcard meal={item} />
          </Link>
        ))}
      </div>

      <h2 className="font-bold">Meals By First Letter</h2>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        {letters?.map((item) => (
          <div
            onClick={() => {
              setSelectedLetter(item);
            }}
            className={`uppercase cursor-pointer hover:text-red-600 ${
              selectedLetter === item ? "text-red-500 text-3xl" : "text-lg"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {mealsByFirstLetter?.map((item, index) => (
          <Link
            to={`/meals/${item?.idMeal}`}
            className="cursor-pointer hover:shadow-md hover:rounded-md"
            key={index}
          >
            <Mealcard meal={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
