import { login, signUp } from "../lib/api/user";

export default {
  LOGIN({ commit }, { userId, password }) {
    return login(userId, password).then((data) => {
      commit("LOGIN", data);
    });
  },
  SIGN_UP(_, { userId, password }) {
    return signUp(userId, password);
  },
};
