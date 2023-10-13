import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { editUser, getUserById } from "../apis/Users";
import { inputClass } from "../utils/TailwindClassesUtil";

export default function UserById() {
  const { userId } = useParams();
  let [user, setUser] = React.useState({});
  useEffect(() => {
    document.title = "UserById";
    getUserById(userId).then((res) => {
      setUser(res?.data);
    });
  }, []);
  return (
    <div className="max-w-lg m-auto flex justify-center my-2 flex-col gap-2">
      <img src={user?.avatar} className="self-center" />
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          editUser(user).then((res) => {
            console.log(res);
          });
        }}
      >
        <input
          onChange={(e) => {
            user.first_name = e.target.value;
            setUser({ ...user });
          }}
          className={inputClass}
          type="text"
          value={user?.first_name}
        />
        <input
          onChange={(e) => {
            user.email = e.target.value;
            setUser({ ...user });
          }}
          className={inputClass}
          type="text"
          value={user?.email}
        />
        <button
          className={
            "bg-green-500 w-fit text-white px-3 py-2 rounded-md self-center "
          }
        >
          Edit
        </button>
      </form>
    </div>
  );
}
