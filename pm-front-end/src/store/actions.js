import { login, signUp } from "../lib/api/user";
import { createBoard, getBoardList, deleteBoard } from "../lib/api/board";
import { createProject, getProjectList, deleteProject } from "../lib/api/project";

export default {
  LOGIN({ commit }, { userId, password }) {
    return login(userId, password).then((data) => commit("LOGIN", data));
  },
  SIGN_UP({ commit }, { userId, password }) {
    return signUp(userId, password)
      .then(() => commit("SIGN_UP", ""))
      .catch((err) => {
        if (err.response.status === 409) commit("SIGN_UP", "409");
      });
  },
  CREATE_BOARD(_, { title }) {
    return createBoard(title).then(({ item }) => item.id);
  },
  GET_BOARD_LIST({ commit }) {
    return getBoardList().then((data) => commit("SET_BOARD_LIST", data));
  },
  DELETE_BOARD(_, id) {
    return deleteBoard(id);
  },
  CREATE_PROJECT(_, { title }) {
    return createProject(title).then(({ item }) => item.id);
  },
  GET_PROJECT_LIST({ commit }) {
    return getProjectList().then((data) => commit("SET_PROJECT_LIST", data));
  },
  DELETE_PROJECT(_, id) {
    return deleteProject(id);
  },
};
