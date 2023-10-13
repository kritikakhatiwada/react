import React, { useEffect } from "react";
import Routing from "./Routing";
import "../src/components/common.css";
import "./components/common.css";
import Countries from "./components/Countries";
import Header from "./components/Header";
import RandomDrink from "./components/RandomDrink";
import Home from "./components/Home";
import FormStudent from "./components/StudentForm";
import { initializeFirebase } from "./utils/firebase";
import { isUserLoggedIn } from "./utils/Login";

export default function App() {
  const [water, setWater] = React.useState("liquid");
  const [counter, setCounter] = React.useState(0);
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    initializeFirebase();
  }, []);

  function handleClick(res) {
    alert("hello");
    console.log(res);
  }

  const updateWater = (val) => {
    setWater(val);
  };

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      {isUserLoggedIn() ? <Header /> : ""}
      <Routing />
    </div>
  );
}
