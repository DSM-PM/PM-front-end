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
  SET_BOARD_LIST(state, { list }) {
    state.boardList = list.map((board) => board);
  },
  SET_PROJECT_LIST(state, { list }) {
    state.projectList = list.map((project) => project);
  },
  SET_ISSUE_LIST(state, { issueList }) {
    state.issueList = issueList.map((issueList) => issueList);
  },
};
