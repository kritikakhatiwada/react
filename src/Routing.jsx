import React from "react";
import Countries from "./components/Countries";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
// import getRandomDrinks from "./apis/drink";
import RandomDrink from "./components/RandomDrink";
import Users from "./components/Users";
import Drinks from "./components/Drinks";
import Meal from "./components/Meal";
import UserById from "./components/UserById";
import DrinkByID from "./components/DrinkByID";
import MealByID from "./components/MealByID";
import { isUserLoggedIn } from "./utils/Login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import RandomMeal from "./components/RandomMeal";

export default function Routing() {
  return (
    <div>
      {isUserLoggedIn() ? (
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/random-drink">
            <RandomDrink />
          </Route>
          <Route path="/drinks/:drinkId">
            <DrinkByID />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/users/:userId">
            <UserById />
          </Route>
          <Route path="/drinks">
            <Drinks />
          </Route>
          <Route path="/meal">
            <Meal />
          </Route>
          <Route path="/random-meal">
            <RandomMeal />
            <Route path="/meals/:mealId">
              <MealByID />
            </Route>
          </Route>
        </Switch>
      ) : (
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Redirect path="*" to={"/login"} />
        </Switch>
      )}
    </div>
  );
}
