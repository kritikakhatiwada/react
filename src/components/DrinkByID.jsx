import React, { useEffect } from "react";
import { getDrinkById } from "../apis/drink";
import DrinkDetail from "./DrinkDetail";
import { useParams } from "react-router-dom";

export default function DrinkByID(props) {
  const [drink, setDrink] = React.useState({});
  const { drinkId } = useParams();
  useEffect(() => {
    getDrinkById(drinkId).then((res) => {
      setDrink(res?.drinks?.[0]);
    });
  }, []);
  return (
    <div>
      <DrinkDetail drink={drink} />
    </div>
  );
}
