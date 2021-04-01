import axios from "axios";
import { client } from "./client";

export const login = (userId, password) => {
  return client.post("/user/auth", { userId, password }).then(({ data }) => data);
};

export const setAuthInHeader = (accessToken) => {
  console.log(accessToken);
  axios.defaults.headers.common["access-token"] = accessToken ? `${accessToken}` : null;
};

export const signUp = (userId, password) => {
  return client.post("/user/register", { userId, password }).then(({ data }) => data);
};
