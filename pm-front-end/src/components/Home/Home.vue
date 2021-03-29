<template>
  <div class="board-list">
    <board-item />
    <board-item />
    <board-item />
    <board-item />
    <board-item />
    <div class="board-item">
      <a class="new-board-btn" href @click.prevent="onCreateBoard">Create new board...</a>
    </div>
  </div>
</template>

<script>
import { BoardItem } from "./";
export default {
  name: "Home",
  components: { "board-item": BoardItem }
};
</script>
