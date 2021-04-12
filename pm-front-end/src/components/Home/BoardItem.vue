<template>
  <div class="board-item">
    <router-link :to="`/kanban/${boardList.id}`" class="none-link">
      <div class="board-item-title">{{boardList.title}}</div>
    </router-link>
    <button class="board-item-button" @click="onDeleteBoard">X</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { confirmAlert } from "@/lib/sweetAlert";
import { ErrorToast, SuccessToast } from "../../lib/toast";
export default {
  props: ["boardList", "path"],
  methods: {
    ...mapActions(["DELETE_BOARD", "DELETE_PROJECT"]),
    onDeleteBoard() {
      this.path === "/home"
        ? confirmAlert(
            this.boardList.title,
            "해당 보드를 삭제하시겠습니까?",
            "warning",
            () => {
              this.DELETE_BOARD(this.boardList.id)
                .then(() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 500);
                  SuccessToast("보드가 삭제되었습니다.");
                })
                .catch(() => {
                  ErrorToast("보드 삭제에 실패했습니다.");
                });
            }
          )
        : confirmAlert(
            this.boardList.title,
            "해당 프로젝트를 삭제하시겠습니까?",
            "warning",
            () => {
              this.DELETE_PROJECT(this.boardList.id)
                .then(() => {
                  setTimeout(() => {
                    window.location.reload();
                  }, 500);
                  SuccessToast("프로젝트가 삭제되었습니다.");
                })
                .catch(() => {
                  ErrorToast("프로젝트 삭제에 실패했습니다.");
                });
            }
          );
    }
  }
};
</script>
