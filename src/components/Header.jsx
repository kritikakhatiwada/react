import React from "react";
import { Link } from "react-router-dom";
import { getUser, isUserLoggedIn } from "../utils/Login";

export default function Header() {
  return (
    <div className="bg-green-800 p-2 text-white flex justify-between">
      <div className="flex gap-2 items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/countries"}>Countries</Link>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/random-drink"}>Random Drinks</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/meal"}>Meals</Link>
      </div>

      <div>
        {isUserLoggedIn() ? (
          <div className="flex items-center gap-1 border-white border-[0.25px] p-1 rounded-md">
            <img
              className="rounded-full w-6 h-6"
              src={getUser().image}
              alt={""}
            />
            <div className="grid gap-1">
              <span className="text-[14px]">{getUser().name}</span>
              <span className="text-[12px]">{getUser().email}</span>
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
