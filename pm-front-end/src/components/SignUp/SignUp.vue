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
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["SIGN_UP"]),
    onSignUp() {
      this.id === "" && this.password === ""
        ? alert("아이디와 패스워드를 입력해주세요.")
        : this.SIGN_UP({ userId: this.userId, password: this.password })
            .then(() => {
              alert("굳");
            })
            .catch(err => {
              console.log(err);
            });
    }
  }
};
</script>
