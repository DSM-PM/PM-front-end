import { client } from "./client";

export const createBoard = (title) => {
  return client.post("/board", { title }).then(({ data }) => data);
};
