import { getCountries } from "../apis/country";
import React from "react";
import CountryCard from "./cards/CountryCard";

export default function Countries() {
  const [countries, setCountries] = React.useState([]);
  React.useEffect(() => {
    console.log("Here");
    getCountries()
      .then((resp) => {
        setCountries(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="CountriesWrapper">
      {countries?.map((item, index) => (
        <div key={index}>
          <CountryCard country={item} />
        </div>
      ))}
    </div>
  );
}
