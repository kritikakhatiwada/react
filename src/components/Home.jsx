import { getAllUsers } from "../apis/Users";
import "./common.css";
export default function Home(props) {
  const handleData = () => {
    getAllUsers().then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <span className="text-2xl text-red-400">Hello,</span>
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
