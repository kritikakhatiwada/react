import React from "react";
import Styles from "./Card.module.css";

export default function CountryCard({ country }) {
  return (
    <div className={Styles.cardWrapper}>
      <img className={Styles.cardImage} src={country.flags.png} alt="" />
      <h3>{country?.name?.common}</h3>
      <span>{country?.capital?.join(", ")}</span>
    </div>
  );
}
