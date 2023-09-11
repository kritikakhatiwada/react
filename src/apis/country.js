import axios from "axios";

export function getCountries() {
  console.log("into get countries");
  return new Promise((resolve, reject) => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
}
