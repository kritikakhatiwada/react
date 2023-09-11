import React from "react";
import Countries from "./components/Countries";
import Home from "./components/Home";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
// import getRandomDrinks from "./apis/drink";
import Drinks from "./components/Drinks";

export default function Routing() {
  return (
    <div>
      <switch>
        <Route path="/countries">
          <Countries />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/drinks">
          <Drinks />
        </Route>
      </switch>
    </div>
  );
}
