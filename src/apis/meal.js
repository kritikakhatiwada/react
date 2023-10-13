import axios from "axios";

export function getMealCategories() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        console.log("res");
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getRandomMeal() {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}

export function getMealById(mealId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((resp) => resolve(resp?.data))
      .catch((err) => reject(err));
    console.log("DI");
  });
}

export function getMealByCategory(category) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}

export function getMealByName(name) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => resolve(res?.data))
      .catch((err) => reject(err));
  });
}

export function getMealByFirstLetter(letter) {
  return new Promise((resolve, reject) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log("here inside resp");
        resolve(resp);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
