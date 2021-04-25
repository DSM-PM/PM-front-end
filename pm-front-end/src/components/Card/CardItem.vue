<template>
  <div class="card" v-if="category">
    <p>{{issueList.content}}</p>
  </div>
</template>

<script>
export default {
  props: ["issueList", "category"],
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  padding: 0.9rem;
  width: 100%;
  margin: 0.5rem auto 1rem auto;
  height: 6rem;
  border-radius: 0.6rem;
  box-shadow: 1px 2px 10px #00000003;
  cursor: pointer;
  position: relative;

  &:hover {
    height: 6.3rem;
    width: 102%;
    box-shadow: 1px 2px 10px #00000015;
    transition: 0.3s;
  }
}
</style>