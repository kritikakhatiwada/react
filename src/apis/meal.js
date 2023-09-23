import axios from "axios";

export function getMealCategories() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((r) => resolve(r.data))
      .catch((e) => reject(e));
  });
}
