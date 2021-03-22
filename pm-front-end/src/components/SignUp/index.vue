<template>
  <div class="auth-container">
    <sign-up />
    <side-view />
  </div>
</template>

<script>
import { SignUp, SideView } from "./";
import "@/assets/style/authGlobal.scss";
export default {
  name: "SignUp",
  components: { "sign-up": SignUp, "side-view": SideView }
};
</script>
