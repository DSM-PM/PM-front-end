<template>
  <div class="card" v-if="category">
    <div class="card-tag" :style="cardTagStyle"></div>
    <section>
      <p>{{issueList.content}}</p>
      <button class="board-item-button" @click="onDeleteCard">X</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { confirmAlert } from "@/lib/sweetAlert";
import { ErrorToast, SuccessToast } from "../../lib/toast";
export default {
  props: ["issueList", "category", "tag"],
  data() {
    return {
      cardTagStyle: {
        backgroundColor: this.tag
      }
    };
  },
  methods: {
    ...mapActions(["DELETE_ISSUE"]),
    onDeleteCard() {
      confirmAlert(
        this.issueList.content,
        "해당 카드를 삭제하시겠습니까?",
        "warning",
        () => {
          this.DELETE_ISSUE(this.issueList.id)
            .then(() => {
              setTimeout(() => {
                window.location.reload();
              }, 500);
              SuccessToast("카드가 삭제되었습니다.");
            })
            .catch(() => {
              ErrorToast("카드 삭제에 실패했습니다.");
            });
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  background-color: white;
  width: 100%;
  margin: 0.5rem auto 1rem auto;
  height: 6rem;
  border-radius: 0.6rem;
  box-shadow: 1px 2px 10px #00000003;
  cursor: pointer;
  position: relative;

  &:hover {
    height: 6.2rem;
    width: 101%;
    box-shadow: 1px 2px 10px #00000015;
    transition: 0.5s;
  }

  &-tag {
    /* background-color: red; */
    height: 100%;
    width: 0.45rem;
    border-radius: 0.6rem 0 0 0.6rem;
  }

  section {
    padding: 0.9rem;
  }
}
</style>