import { getClientAccessToken } from "./client";

export const createIssue = (board_id, category, content) => {
  return getClientAccessToken()
    .post("/issue", { board_id, category, content })
    .then(({ data }) => data);
};

export const getIssue = (id) => {
  return getClientAccessToken()
    .get(`/issue/${id}`)
    .then(({ data }) => data);
};

export const deleteIssue = (id) => {
  return getClientAccessToken().delete(`/issue/${id}`);
};
