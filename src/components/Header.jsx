import React from "react";
import { Link } from "react-router-dom";
import { getUser, isUserLoggedIn } from "../utils/Login";

export default function Header() {
  return (
    <div className="bg-[#013d3d] p-2 text-white flex justify-between sticky top-0 ">
      <div className="flex gap-16 items-center">
        <Link to={"/"}>Home</Link>
        <Link to={"/countries"}>Countries</Link>
        <Link to={"/drinks"}>Drinks</Link>
        <Link to={"/random-drink"}>Random Drinks</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/meal"}>Meals</Link>
        <Link to={"/random-meal"}>Random Meals</Link>
      </div>

      <div>
        {isUserLoggedIn() ? (
          <div className="flex items-center gap-1 border-white border-[0.25px] p-2 rounded-md">
            <img
              className="rounded-full w-6 h-6"
              src={getUser().image}
              alt={""}
            />
            <div className="grid gap-1">
              <span className="text-[12px]">{getUser().name}</span>
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
