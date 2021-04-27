<template>
  <div class="card" v-if="category">
    <div class="card-tag" :style="cardTagStyle"></div>
    <section>
      <p>{{issueList.content}}</p>
      <button class="board-item-button" @click="onDeleteCard">X</button>
    </section>
    <div class="card-option-box">
      <select name="issue" @change="onChangeCategory">
        <option value="none">이슈 카테고리</option>
        <option value="BACKLOG">BACKLOG</option>
        <option value="TO DO">TO DO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="DONE">DONE</option>
      </select>
      <button @click="onSubmitCategory">변경</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { confirmAlert } from "@/lib/sweetAlert";
import { ErrorToast, SuccessToast, WarningToast } from "../../lib/toast";
export default {
  props: ["issueList", "category", "tag"],
  data() {
    return {
      cardTagStyle: {
        backgroundColor: this.tag
      },
      issueCategory: ""
    };
  },
  methods: {
    ...mapActions(["DELETE_ISSUE", "UPDATE_ISSUE_CATEGORY"]),
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
    },
    onChangeCategory(e) {
      this.issueCategory = e.target.value;
    },
    onSubmitCategory() {
      if (
        this.issueCategory === "BACKLOG" ||
        this.issueCategory === "TO DO" ||
        this.issueCategory === "IN PROGRESS" ||
        this.issueCategory === "DONE"
      ) {
        this.UPDATE_ISSUE_CATEGORY({
          id: this.issueList.id,
          category: this.issueCategory
        }).then(() => {
          setTimeout(() => {
            location.reload();
          }, 400);
          SuccessToast("카드 이동에 성공하셨습니다.");
        });
      } else WarningToast("카테고리를 선택해주세요.");
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #f5df4d;
$gray: #939597;
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
    height: 100%;
    width: 0.45rem;
    border-radius: 0.6rem 0 0 0.6rem;
  }

  section {
    padding: 0.9rem;
  }

  &-option-box {
    select {
      border: 1px solid $color;
      padding: 0.15rem;
      border-radius: 0.2rem;
      color: $gray;
      outline: none;
    }
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    button {
      border: none;
      background-color: $color;
      padding: 0.25rem 0.5rem;
      margin-left: 0.3rem;
      font-size: 0.5rem;
      border-radius: 0.3rem;
      color: $gray;
      cursor: pointer;
    }
  }
}
</style>