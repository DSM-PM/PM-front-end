<template>
  <div class="input-container">
    <div>
      <h1>
        P
        <p>roject</p>M
        <p>anegment</p>
      </h1>
      <p class="description-text">지금 회원가입 하여 프로젝트를 효율적으로 관리해보세요.</p>
      <form>
        <p>아이디</p>
        <input type="text" v-model="userId" @keyup.enter="onSignUp" />

        <p>비밀번호</p>
        <input type="password" v-model="password" @keyup.enter="onSignUp" />
      </form>
      <button @click="onSignUp">회원가입</button>
      <router-link to="/" class="link">이미 계정이 있으신가요?</router-link>
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
    ...mapGetters(["isSignUp"])
  },
  methods: {
    ...mapActions(["SIGN_UP"]),
    onSignUp() {
      this.id === "" && this.password === ""
        ? WarningToast("아이디와 비밀번호를 입력하세요.")
        : this.SIGN_UP({ userId: this.userId, password: this.password })
            .then(() => {
              this.isSignUp.length !== 0
                ? ErrorToast("이미 가입되어 있는 계정입니다.")
                : SuccessToast("PM의 유저가 되신 것을 환영합니다!");
              this.$router.push("/");
            })
    }
  }
};
</script>
