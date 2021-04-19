<template>
  <div class="card">
    <p>로그인 UI 구현</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  padding: 0.9rem;
  width: 90%;
  margin: 0.5rem auto 1rem auto;
  height: 6rem;
  border-radius: 0.6rem;
  box-shadow: 1px 2px 10px #00000003;
  cursor: pointer;

  &:hover {
    width: 92%;
    height: 6.3rem;
    box-shadow: 1px 2px 10px #00000015;
    transition: 0.3s;
  }
}
</style>