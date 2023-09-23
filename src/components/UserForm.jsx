import React from "react";
import { useRef } from "react";
import { inputClass } from "../utils/TailwindClassesUtil";

export default function UserForm(props) {
  const nameRef = useRef();
  const jobRef = useRef();
  const handleSubmit = (e) => {
    console.log("here ");
    e.preventDefault();
    let user = {
      name: nameRef?.current?.value,
      job: jobRef?.current?.value,
    };
    props?.onFormSubmit(user);
  };

  return (
    <div className="grid gap-x-28">
      <h2>User Form</h2>

      <form
        onSubmit={(e) => {
          console.log(e);
          handleSubmit(e);
        }}
        className={"flex flex-col gap-1"}
      >
        <input
          className={inputClass}
          ref={nameRef}
          type="text"
          placeholder="Name"
        />
        <input
          className={inputClass}
          ref={jobRef}
          type="text"
          placeholder="job"
        />
        <button className={inputClass} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
