<template>
  <div class="board-list">
    <board-item
      v-for="(b) in boardList"
      :key="b.id"
      @click="onBoard(b.id)"
      :boardList="b"
      :path="$route.path"
    />
    <div class="board-item">
      <button class="new-board-btn" href @click="openModal">Create new board...</button>
    </div>
    <input-modal @close="closeModal" v-if="modal">
      <h1>CREATE BOARD</h1>
      <input
        v-model="boardName"
        placeholder="board name..."
        class="modal-input"
        @keyup.enter="onSendBoardName"
      />
      <template slot="footer">
        <button @click="onSendBoardName" class="modal-button">추가</button>
      </template>
    </input-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { BoardItem } from "./";
import InputModal from "../Common/Modal/InputModal";
import { WarningToast, ErrorToast, SuccessToast } from "@/lib/toast";
export default {
  name: "Home",
  components: { "board-item": BoardItem, "input-modal": InputModal },
  data() {
    return {
      modal: false,
      boardName: ""
    };
  },
  computed: {
    ...mapState({
      boardList: "boardList"
    })
  },
  created() {
    this.GET_BOARD_LIST();
  },
  methods: {
    ...mapActions(["CREATE_BOARD", "GET_BOARD_LIST"]),
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    onSendBoardName() {
      if (this.boardName.length === 0) {
        WarningToast("보드 이름을 입력하세요.");
      } else {
        this.CREATE_BOARD({ title: this.boardName })
          .then(id => {
            this.$router.push(`/kanban/${id}`);
            this.boardName = "";
            this.closeModal();
            SuccessToast("보드 생성이 완료되었습니다.");
          })
          .catch(() => ErrorToast("다시 시도하세요."));
      }
    },
    onBoard(id) {
      this.$router.push(`/kanban/${id}`);
    }
  }
};
</script>

<style lang="scss">
.modal-input {
  margin: 1rem 0;
  width: 100%;
  padding: 1rem;
}

.modal-button {
  background-color: #f5df4d;
  box-shadow: 0px 3px 6px #00000016;
  width: 100%;
  color: white;
  height: 2.3rem;
  border-radius: 1rem;
  outline: none;
  cursor: pointer;
  border: none;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
}
</style>