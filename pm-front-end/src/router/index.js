import Vue from "vue";
import Router from "vue-router";
import { Login, SignUp, Layout, Home } from "@/components";
Vue.use(Router);

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
      children: [
        {
          name: "Main",
          path: "/home",
          component: Home,
        },
      ],
    },
  ],
});
