import React from "react";

export default function Drinkcard({ drink }) {
  return (
    <div>
      <img className="rounded-t-xl" src={drink?.strDrinkThumb} alt="" />
      <span className="p-3 text-[12px] flex items-center font-Croissant One">
        {drink?.strDrink}
      </span>
    </div>
  );
}
