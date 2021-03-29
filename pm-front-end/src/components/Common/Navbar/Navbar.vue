<template>
  <nav class="nav-container">
    <div>
      <img v-for="(icon, i) in iconList" :src="icon.img" :key="i" @click="onNavLink(i)" />
    </div>
  </nav>
</template>

<script>
import { kanban, issue, plus, logout } from "@/assets/img";
export default {
  data() {
    return {
      iconList: [
        { img: kanban, link: "/kanban" },
        { img: issue, link: "/issue" },
        { img: plus, link: "/d" },
        { img: logout, link: "/" }
      ]
    };
  },
  methods: {
    onNavLink(i) {
      console.log(i);
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