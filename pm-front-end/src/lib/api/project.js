import { getClientAccessToken } from "./client";

export const createProject = (title) => {
  return getClientAccessToken()
    .post("/project", { title })
    .then(({ data }) => data);
};

export const getProjectList = () => {
  return getClientAccessToken()
    .get("/project")
    .then(({ data }) => data);
};

export const deleteProject = (id) => {
  return getClientAccessToken().delete(`/project/${id}`);
};
