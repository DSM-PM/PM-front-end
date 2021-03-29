import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import { Login, SignUp, Layout, Home, Kanban, Issue } from "@/components";
Vue.use(Router);

const requireAuth = () => (from, to, next) => {
  if (store.state.accessToken) next();
  else {
    alert("로그인하세요");
    next("/");
  }
};

export default new Router({
  mode: "history",
  routes: [
    {
      name: "login",
      path: "/",
      component: Login,
    },
    {
      name: "signUp",
      path: "/sign-up",
      component: SignUp,
    },
    {
      name: "Home",
      path: "/home",
      component: Layout,
      beforeEnter: requireAuth(),
      children: [
        {
          name: "Main",
          path: "/home",
          component: Home,
        },
        {
          name: "Kanban",
          path: "/kanban",
          component: Kanban,
        },
        {
          name: "Issue",
          path: "/issue",
          component: Issue,
        },
      ],
    },
  ],
});
