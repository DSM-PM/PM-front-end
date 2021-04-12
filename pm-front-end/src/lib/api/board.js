import { getClientAccessToken } from "./client";

export const createBoard = (title) => {
  return getClientAccessToken()
    .post("/board", { title })
    .then(({ data }) => data);
};

export const getBoardList = () => {
  return getClientAccessToken()
    .get("/board")
    .then(({ data }) => data);
};

export const deleteBoard = (id) => {
  return getClientAccessToken().delete(`/board/${id}`);
};
