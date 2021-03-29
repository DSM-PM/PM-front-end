import Vue from "vue";
import VueToastify from "vue-toastify";
Vue.use(VueToastify, { position: "top-right" });

export const SuccessToast = (message) => {
  Vue.$vToastify.success(message);
};

export const WarningToast = (message) => {
  Vue.$vToastify.warning(message);
};

export const ErrorToast = (message) => {
  Vue.$vToastify.error(message);
};
