<template>
  <div class="list-container">
    <p class="list-container-title">{{listInfo.title}}</p>
    <card />
    <card />
    <card />
    <card />
    <card />
  </div>
</template>

<script>
import CardItem from "../Card/CardItem";
export default {
  props: ["listInfo"],
  components: { card: CardItem }
};
</script>

<style lang="scss" >
.list {
  display: flex;
  &-container {
    overflow: scroll;
    background-color: #93959710;
    border-radius: 0.8rem;
    margin-left: 2.5rem;
    vertical-align: top;
    width: 22%;
    height: 49rem;
    max-height: 100%;

    &-title {
      margin: 1rem 0 1rem 1rem;
    }
  }
}
</style>