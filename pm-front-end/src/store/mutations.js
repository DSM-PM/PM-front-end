import { setAuthInHeader } from "../lib/api/user";

export default {
  LOGIN(state, data) {
    const accessToken = data.accessToken;
    if (!accessToken) return;
    else state.accessToken = true;
    localStorage.setItem("accessToken", accessToken);
    setAuthInHeader(accessToken);
  },
  SIGN_UP(state, data) {
    state.userStatus = data;
  },
};
