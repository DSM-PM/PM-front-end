import Vue from "vue";
import Router from "vue-router";
import { Login, SignUp, Layout, Home, Kanban, Issue, Project } from "@/components";
Vue.use(Router);

const requireAuth = () => (from, to, next) => {
  if (localStorage.getItem("accessToken")) next();
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
          path: "/kanban/:id",
          component: Kanban,
        },
        {
          name: "Project",
          path: "/project",
          component: Project,
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
