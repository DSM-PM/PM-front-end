<template>
  <div class="input-container">
    <div>
      <h1>
        P
        <p>roject</p>M
        <p>anegment</p>
      </h1>
      <p class="description-text">로그인하여 프로젝트를 효율적으로 관리해보세요</p>
      <form>
        <p>아이디</p>
        <input type="text" v-model="userId" @keyup.enter="onLogin" />

        <p>비밀번호</p>
        <input type="password" v-model="password" @keyup.enter="onLogin" />
      </form>
      <button @click="onLogin">로그인</button>
      <router-link to="/sign-up" class="link">아직 계정이 없으신가요?</router-link>
    </div>
  </div>
</template>

<script>
import { SuccessToast, ErrorToast, WarningToast } from "../../lib/toast";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    ...mapActions(["LOGIN"]),
    onLogin() {
      this.userId === "" && this.password === ""
        ? WarningToast("아이디와 비밀번호를 입력하세요.")
        : this.LOGIN({ userId: this.userId, password: this.password })
            .then(() => {
              if (this.isAuth === true) {
                SuccessToast("환영합니다");
                this.$router.push("/home");
              } else ErrorToast("로그인 실패. 다시 시도하세요.");
            })
            .catch(() => ErrorToast("로그인 실패. 다시 시도하세요."));
    }
  }
};
</script>
