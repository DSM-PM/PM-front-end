import { login, signUp } from "../lib/api/user";
import { createBoard, getBoardList } from "../lib/api/board";
import { createProject, getProjectList } from "../lib/api/project";

export default {
  LOGIN({ commit }, { userId, password }) {
    return login(userId, password).then((data) => commit("LOGIN", data));
  },
  SIGN_UP({ commit }, { userId, password }) {
    return signUp(userId, password)
      .then(() => commit("SIGN_UP", ""))
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status === 409) commit("SIGN_UP", "409");
      });
  },
  CREATE_BOARD(_, { title }) {
    return createBoard(title).then(({ item }) => item.id);
  },
  GET_BOARD_LIST({ commit }) {
    return getBoardList().then((data) => commit("SET_BOARD_LIST", data));
  },
  CREATE_PROJECT(_, { title }) {
    return createProject(title).then(({ item }) => item.id);
  },
  GET_PROJECT_LIST({ commit }) {
    return getProjectList().then((data) => commit("SET_PROJECT_LIST", data));
  },
};
