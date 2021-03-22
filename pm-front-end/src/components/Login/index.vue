<template>
  <div class="auth-container">
    <login />
    <side-view />
  </div>
</template>

<script>
import { Login, SideView } from "./";
import "@/assets/style/authGlobal.scss";
export default {
  name: "Login",
  components: { login: Login, "side-view": SideView }
};
</script>