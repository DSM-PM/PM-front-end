import Vue from "vue";
import Router from "vue-router";
import { Login } from "@/components";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: "login",
      path: "/",
      component: Login,
    },
  ],
});
