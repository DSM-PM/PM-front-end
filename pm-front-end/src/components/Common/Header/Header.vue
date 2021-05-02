<template>
  <header>
    <div>
      <router-link to="/home" class="none-link">
        <h1>
          P
          <p>roject</p>M
          <p>anegment</p>
        </h1>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../assets/style/variables";

header {
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: #{$titleFont};
    font-size: 4rem;
    display: flex;
    align-items: baseline;
    color: #{$yellow};
    p {
      color: #{$gray};
      font-family: #{$titleFont};
      font-size: 1.4rem;
      margin: 0 0.2rem 0 0.4rem;
    }
  }
}

.none-link {
  text-decoration: none;
}
</style>