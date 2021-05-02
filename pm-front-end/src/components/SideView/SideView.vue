<template>
  <div class="side-container">
    <img :src="sideViewImg" />
  </div>
</template>

<script>
import { sideViewImg } from "@/assets/img";
export default {
  data() {
    return { sideViewImg };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
.side-container {
  width: 50%;
  height: 100vh;
  background-color: #fcf5c9;
  display: flex;
  justify-content: center;
  img {
    width: 95%;
  }
}
@include mobile {
  .side-container {
    display: none;
  }
}
</style>