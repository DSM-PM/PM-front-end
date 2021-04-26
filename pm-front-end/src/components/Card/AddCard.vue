<template>
  <div class="add-card">
    <form @submit="onCreateNewIssue">
      <input type="text" placeholder="issue contents..." v-model="inputCardTitle" ref="inputCardTitle" @blur="$emit('close')" />
      <button :disabled="invalidInput">Enter키를 누르세요</button>
      <a class="cancel-add-btn" href @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["listCategory", "boardId"],
  data() {
    return {
      inputCardTitle: ""
    };
  },
  computed: {
    invalidInput() {
      return !this.inputCardTitle.trim();
    }
  },
  mounted() {
    this.$refs.inputCardTitle.focus();
  },
  methods: {
    ...mapActions(["CREATE_ISSUE"]),
    onCreateNewIssue() {
      if (this.invalidInput) return;
      const { inputCardTitle, listCategory, boardId } = this;
      this.CREATE_ISSUE({
        board_id: boardId,
        category: listCategory,
        title: inputCardTitle
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.add-card {
  margin: 1rem 0;
  display: block;
  position: relative;

  input {
    width: 100%;
    padding: 0.3rem 0.1rem;
    margin-bottom: 1rem;
  }
  button {
    background-color: rgb(87, 172, 87);
    color: white;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
  }
}
.add-card .cancel-add-btn {
  display: inline-block;
  margin-left: 1rem;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 1.5rem;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
  color: #666;
}
</style>
