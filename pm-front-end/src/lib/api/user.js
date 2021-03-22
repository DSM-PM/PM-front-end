import axios from "axios";
import { client } from "./client";

export const signUp = (userId, password) => {
  return client
    .post("/user/register", { userId, password })
    .then(({ data }) => data)
    .catch((err) => {
      console.log(err);
      console.log(userId, password);
    });
};
