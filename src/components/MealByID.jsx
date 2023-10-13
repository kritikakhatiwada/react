import React, { useEffect } from "react";
import { getMealById } from "../apis/meal";
import MealDetail from "./MealDetail";
import { useParams } from "react-router-dom";

export default function MealByID(props) {
  console.log("object");
  const [meals, setMeals] = React.useState({});
  const { mealId } = useParams();
  useEffect(() => {
    document.title = "Different Meals";
    getMealById(mealId).then((resp) => {
      setMeals(resp?.meals?.[0]);
    });
  }, []);
  return (
    <div>
      <MealDetail meal={meals} />
    </div>
  );
}
