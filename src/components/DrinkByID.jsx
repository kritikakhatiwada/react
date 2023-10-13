import React, { useEffect } from "react";
import { getDrinkById } from "../apis/drink";
import DrinkDetail from "./DrinkDetail";
import { useParams } from "react-router-dom";

export default function DrinkByID(props) {
  console.log("DrinkByID");
  const [drink, setDrink] = React.useState({});
  const { drinkId } = useParams();
  useEffect(() => {
    document.title = "Different drinks";
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
