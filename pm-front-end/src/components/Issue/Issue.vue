<template>
  <div class="list">
    <list v-for="(l, i) in lists" :key="i" :listInfo="l" />
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
export default {
  components: { list: List },
  data() {
    return {
      lists: [
        {
          title: "BACKLOG",
          color: "red"
        },
        {
          title: "TO DO",
          color: "purple"
        },
        {
          title: "IN PROGRESS",
          color: "blue"
        },
        {
          title: "DONE",
          color: "green"
        }
      ]
    };
  }
};
</script>
