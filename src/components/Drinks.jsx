import React, { useEffect, useState } from "react";
import {
  getDrinkCategories,
  getDrinksByCategory,
  getDrinksByFirstLetter,
  getDrinksByName,
} from "../apis/drink";
import DrinkCategories from "./DrinkCategories";
import { Link } from "react-router-dom";
import Search from "./Search";
import DrinkCard from "./cards/Drinkcard";

export default function Drinks() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Shake");
  const [drinks, setDrinks] = useState([]);
  const [drinksByFirstLetter, setDrinksByFirstLetter] = useState([]);
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
    document.title = "Drinks";
    getDrinkCategories().then((resp) => {
      setCategories(resp?.drinks);
    });
  }, []);

  useEffect(() => {
    console.log("1");
    getDrinksByCategory(selectedCategory).then((res) => {
      setDrinks(res?.drinks);
    });
  }, [selectedCategory]);

  useEffect(() => {
    getDrinksByFirstLetter(selectedLetter)
      .then((res) => {
        setDrinksByFirstLetter(res?.drinks);
      })
      .catch(() => {});
  }, [selectedLetter]);

  const fetchDrinksByName = (name) => {
    getDrinksByName(name).then((res) => {
      setDrinks(res?.drinks);
    });
  };

  return (
    <div className="max-w-6xl m-auto my-2  flex flex-col gap-4">
      <DrinkCategories
        selectedCategory={selectedCategory}
        categories={categories}
        onCategorySelected={(category) => {
          setSelectedCategory(category);
        }}
      />
      {/* <div className="search"> */}
      <Search
        onClickSearchButton={(name) => {
          fetchDrinksByName(name);
        }}
      />
      {/* </div> */}
      <h2 className="font-bold">Drinks By Category</h2>
      <div className="grid grid-cols-5 gap-2">
        {drinks?.map((item, index) => (
          <Link
            to={`/drinks/${item?.idDrink}`}
            className="cursor-pointer hover:shadow-md hover:rounded-md "
            key={index}
          >
            <DrinkCard drink={item} />
          </Link>
        ))}
      </div>

      <h2 className="font-bold">Drinks By Letter</h2>
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
        {drinksByFirstLetter?.map((item, index) => (
          <Link
            to={`/drinks/${item?.idDrink}`}
            className="cursor-pointer hover:shadow-md hover:rounded-md"
            key={index}
          >
            <DrinkCard drink={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
