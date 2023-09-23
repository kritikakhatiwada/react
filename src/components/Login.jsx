import React from "react";
import { LogInWithGoogle } from "../utils/Login";

export default function Login() {
  return (
    <div>
      <div className="p-2 rounded-md">
        <button
          onClick={() => {
            LogInWithGoogle();
          }}
          className="uppercase p-2 rounded-md bg-red-500"
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}
