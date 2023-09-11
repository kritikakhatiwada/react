import React from "react";
import { getRandomDrinks } from "../apis/drink";
import "./Drinks.css"; 

export default function Drinks() {
  const [drinks, setDrinks] = React.useState({});

  React.useEffect(() => {
    getRandomDrinks().then((res) => {
      setDrinks(res?.drinks?.[0]);
    });
  }, []);

  return (
    <div className="drink-card">
      {drinks?.strDrinkThumb && (
        <img
          src={drinks.strDrinkThumb}
          alt={drinks.strDrink}
          className="drink-image"
        />
      )}
      <h1>{drinks?.strDrink}</h1>
    </div>
  );
}
