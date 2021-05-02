<template>
  <div class="home-container">
    <h1 class="home-container-title">Boards</h1>
    <home />
  </div>
</template>

<script>
import { Home } from "./";
export default {
  name: "Home",
  components: { home: Home }
};
</script>

<style lang="scss">
@import "../../assets/style/mixin";
$yellow: #fff5b4;

.home-container {
  width: 100%;
  &-title {
    margin-left: 1.3rem;
    font-size: 1.3rem;
  }
}

.board-list {
  padding: 1.2rem;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  position: relative;
  display: flex;
  height: 7rem;
  width: 23%;
  margin: 0 2% 1.2rem 0;
  border-radius: 3px;
  background-color: white;
  border-radius: 1rem;
  border: 8px solid $yellow;
  box-shadow: 1px 20px 50px #00000013;
  &:hover {
    border: 8px solid #ffed79;
    transition: 0.3s;
  }

  &-button {
    position: absolute;
    top: -12%;
    right: -3%;
    border: none;
    padding: 0.4rem 0.7rem;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    &:hover {
      background-color: rgb(247, 100, 100);
      color: white;
      transition: 0.3s;
    }
  }
}
.new-board-btn {
  border: none;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;
  background: inherit;
}
.new-board-btn:hover,
.new-board-btn:focus {
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 0.1);
  color: #666;
}
.board-item-title {
  color: #222222;
  font-weight: 300;
  padding: 0.8rem;
}
.board-item a.new-board-btn {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 6rem;
  width: inherit;
  color: #888;
  font-weight: 700;
}
@include mobile {
  .board-list {
    display: block;
  }

  .board-item {
    width: 100%;
  }

  #app section {
    height: 100%;
  }
}
</style>