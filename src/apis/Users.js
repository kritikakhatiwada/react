import axios from "axios";
export function getUsers() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
