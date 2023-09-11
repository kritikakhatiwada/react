import React from "react";
import { getRandomDrinks } from "../apis/drink";

export default function Drinks() {
  const [drinks, setDrinks] = React.useState([]);
  React.useEffect(() => {
    getRandomDrinks().then((res) => {
      setDrinks(res?.drinks?.[0]);
    });
  }, []);
  return <div>{drinks?.strDrink}</div>;
}
