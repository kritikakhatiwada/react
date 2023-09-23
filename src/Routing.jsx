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
import Login from "./components/Login";
import DrinkByID from "./components/DrinkByID";

export default function Routing() {
  return (
    <div>
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
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
