<template>
  <header>
    <div>
      <router-link to="/home" class="header-link">
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

<style lang="scss" scoped>
$yellow: #f5df4d;
$gray: #939597;
$font: "AppleSDGothicNeo";
$titleFont: "Impact";

header {
  display: flex;
  justify-content: center;
  align-items: center;

  .header-link {
    text-decoration: none;
  }

  h1 {
    font-family: $titleFont;
    font-size: 4rem;
    display: flex;
    align-items: baseline;
    color: $yellow;
    p {
      color: $gray;
      font-family: $titleFont;
      font-size: 1.4rem;
      margin: 0 0.2rem 0 0.4rem;
    }
  }
}
</style>