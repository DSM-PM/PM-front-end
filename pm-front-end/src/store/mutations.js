import { setAuthInHeader } from "../lib/api/user";

export default {
  LOGIN(state, data) {
    const accessToken = data.accessToken;
    if (!accessToken) return;
    state.accessToken = accessToken;
    localStorage.setItem("accessToken", accessToken);
    setAuthInHeader(accessToken);
  },
};
