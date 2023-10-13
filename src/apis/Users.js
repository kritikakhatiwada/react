import axios from "axios";
import React from "react";
export function getAllUsers(page) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getUserById(userId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
   
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function saveUser(user) {
  let someAuth = "SOmepass";
  return (Promise = new Promise((resolve, reject) => {
    axios({
      url: "https://reqres.in/api/users",
      method: "post",
      data: user,
      headers: {
        Authorization: `Bearer ${someAuth}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  }));
}
export function editUser(user) {
  let someAuth = "SOmepass";
  return (Promise = new Promise((resolve, reject) => {
    axios({
      url: "https://reqres.in/api/users/${user.id}",
      method: "put",
      data: user,
      headers: {
        Authorization: `Bearer ${someAuth}`,
      },
    })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  }));
}
