import axios from "axios";

export function getRandomDrinks() {
  console.log("into get drinks");
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
}
