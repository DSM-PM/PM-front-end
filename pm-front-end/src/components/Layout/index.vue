<template>
  <div id="app">
    <section>
      <Navbar />
      <div class="layout">
        <Header />
        <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import { Navbar, Header } from "../index";
export default {
  components: {
    Header: Header,
    Navbar: Navbar
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin";
#app {
  section {
    display: flex;
    height: 100vh;
    .layout {
      width: 100%;
    }
  }
}

@include mobile {
  #app {
    section {
      height: 100%;
    }
  }
}
</style>