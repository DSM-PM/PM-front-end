import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

export const confirmAlert = (title, subTitle, icon, requestFunction) => {
  return Vue.swal({
    title,
    text: subTitle,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#de2626",
    cancelButtonColor: "#022796",
    confirmButtonText: "삭제",
    cancelButtonText: "취소",
  }).then((res) => {
    if (res.value) {
      requestFunction();
    }
  });
};
