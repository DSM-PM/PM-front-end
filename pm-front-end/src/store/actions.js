import { login, signUp } from "../lib/api/user";
import { createBoard } from "../lib/api/board";

export default {
  LOGIN({ commit }, { userId, password }) {
    return login(userId, password).then((data) => commit("LOGIN", data));
  },
  SIGN_UP({ commit }, { userId, password }) {
    return (
      signUp(userId, password)
        .then(() => commit("SIGN_UP", ""))
        .catch((err) => {
          console.log(err.response.status);
          if (err.response.status === 409) commit("SIGN_UP", "409");
        })
    );
  },
  CREATE_BOARD(_, { title }) {
    return createBoard(title).then(({ item }) => item.id);
  },
};
