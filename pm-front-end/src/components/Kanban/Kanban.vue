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
          title: "BACKLOG"
        },
        {
          title: "TO DO"
        },
        {
          title: "IN PROGRESS"
        },
        {
          title: "DONE"
        }
      ]
    };
  }
};
</script>