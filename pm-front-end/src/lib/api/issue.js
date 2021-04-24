import { client } from "./client";

export const createIssue = (board_id, category, content) => {
  return client.post("/issue", { board_id, category, content }).then(({ data }) => data);
};

export const getIssue = (id) => {
  return client.get(`/issue/${id}`).then(({ data }) => data);
};
