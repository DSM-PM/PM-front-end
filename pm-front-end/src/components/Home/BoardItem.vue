<template>
  <div class="board-item">
    <router-link :to="`/kanban/${boardList.id}`" class="none-link">
      <div class="board-item-title">{{boardList.title}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["boardList"],
};
</script>
