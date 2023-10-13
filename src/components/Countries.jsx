import { getCountries } from "../apis/country";
import React from "react";
import CountryCard from "./cards/CountryCard";
import "../components/common.css";
export default function Countries() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    console.log("Here");
    getCountries()
      .then((resp) => {
        setTimeout(() => {
          setCountries(resp);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    // open this project file ki folder?
    <div>
      <button
        onClick={() => {
          setCountries([]);
        }}
        className="bg-blue-400 hover:bg-blue-800 hover:text-white rounded-full m-2 p-2"
      >
        Clear Countries
      </button>

      <div className="CountriesWrapper">
        {countries?.map((item, index) => (
          <div key={index}>
            <CountryCard country={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
