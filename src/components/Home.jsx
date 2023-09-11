import { getUsers } from "../apis/Users";
import "./common.css";
export default function Home(props) {
  const handleData = () => {
    getUsers().then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      Hello ,{props.name}
      <button
        id="btn"
        onClick={() => {
          console.log("Ram");
          props.onHandleClick();

          handleData();
        }}
      >
        Get data
      </button>
    </div>
  );
}
