import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/style/global.scss";
import VueToastify from "vue-toastify";

Vue.config.productionTip = false;
Vue.use(VueToastify, { position: "top-right" });

new Vue({ router, store, render: (h) => h(App) }).$mount("#app");
