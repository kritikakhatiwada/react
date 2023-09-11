import Routing from "./Routing";
import "./components/common.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Drinks from "./components/Drinks";
// import Home from "./components/Home";

export default function App() {
  // function onHandleClick() {
  //   alert("Hello");
  // }
  return (
    <div id="app">
      {/* <Home name="Kritika" onHandleClick={onHandleClick} />
      <About />
  <Contact />
       <Countries /> */}

      <Header />
      <Routing />
    </div>
  );
}
