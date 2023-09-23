import React from "react";
import Drinks from "./RandomDrink";
import ReactPlayer from "react-player";

export default function DrinkDetail({ drink }) {
  return (
    <div>
      <div
        // className="drink-card"
        className={"flex flex-col gap-3 max-w-lg m-auto"}
      >
        <div
          className="cursor-pointer"
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </div>
        <div className={"flex gap-2 items-center"}>
          <span className={"text-2xl"}>{drink?.strDrink}</span>
          <div
            className={
              "text-red-400 text-[10px] p-1 border-red-400 border-[0.5px] rounded-xl"
            }
          >
            {drink?.strCategory}
          </div>
        </div>
        {/* {drink?.strDrinkThumb && ()} */}
        {drink?.strVideo ? (
          <ReactPlayer width={"100%"} height={"300"} url={drink?.strVideo} />
        ) : (
          <img
            alt=""
            className={
              "shadow-blue-500/80 object-cover self-center rounded-lg shadow-lg h-60"
            }
            src={drink?.strDrinkThumb}
            // alt={drink.strDrink}
            // className="drink-image"
          />
        )}
        <span className={"text-gray-500 text-sm"}>
          {drink?.strInstructions}
        </span>
        <div>
          <h4 className="font-semibold">Glass</h4>
          <span>{drink?.strGlass}</span>
        </div>
        <div className={"flex justify-between items-center"}>
          <span className="font-bold">Ingredients</span>
          <div className="font-bold">Quantity</div>
        </div>
        {Array.from({ length: 15 }).map((item, index) => {
          if (
            !drink?.[`strMeasure${index + 1}`] &&
            !drink?.[`strIngredient${index + 1}`]
          ) {
            return "";
          }
          return (
            <div className={"flex justify-between items-center"}>
              <span className="font-200">
                {drink?.[`strIngredient${index + 1}`]}
              </span>
              <span className="font-200">
                {drink?.[`strMeasure${index + 1}`]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
