<template>
  <nav class="nav-container">
    <div>
      <img v-for="(icon, i) in iconList" :src="icon.img" :key="i" @click="onNavLink(i)" />
    </div>
  </nav>
</template>

<script>
import { kanban, issue, logout } from "@/assets/img";
export default {
  data() {
    return {
      iconList: [
        { img: kanban, link: "/home" },
        { img: issue, link: "/project" },
        { img: logout, link: "/" }
      ]
    };
  },
  methods: {
    onNavLink(i) {
      if (i === 3) {
        localStorage.removeItem("accessToken");
      }
      this.$router.push(this.iconList[i].link);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  background-color: #939597;
  height: 100vh;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 35%;

    img {
      cursor: pointer;
      &:hover {
        background-color: #f5df4d;
      }
    }
  }
}
</style>