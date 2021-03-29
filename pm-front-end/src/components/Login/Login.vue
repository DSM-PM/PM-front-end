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
    </div>
  </div>
</template>

<script>
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
        ? alert("아이디와 패스워드를 입력해주세요.")
        : this.LOGIN({ userId: this.userId, password: this.password }).then(
            () => {
              if (this.isAuth === true) this.$router.push("/home");
            }
          );
    }
  }
};
</script>
