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
#app {
  section {
    display: flex;
    .layout {
      width: 100%;
    }
  }
}
</style>