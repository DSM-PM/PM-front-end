<template>
  <div class="board-list">
    <board-item v-for="(p) in projectList" :key="p.id" @click="onProject(p.id)" :boardList="p" />
    <div class="board-item">
      <button class="new-board-btn" href @click="openModal">Create new project...</button>
    </div>
    <h1 @click="a" class="delete">삭제</h1>
    <input-modal @close="closeModal" v-if="modal">
      <h1>CREATE PROJECT</h1>
      <input v-model="projectName" placeholder="project name..." class="modal-input" />
      <template slot="footer">
        <button @click="onSendProjectName" class="modal-button">추가</button>
      </template>
    </input-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { BoardItem } from "../Home";
import InputModal from "../Common/Modal/InputModal";
import { WarningToast, ErrorToast, SuccessToast } from "@/lib/toast";
import { confirmAlert } from "@/lib/sweetAlert";
export default {
  name: "Project",
  components: { "board-item": BoardItem, "input-modal": InputModal },
  data() {
    return {
      modal: false,
      projectName: ""
    };
  },
  computed: {
    ...mapState({
      projectList: "projectList"
    })
  },
  created() {
    this.GET_PROJECT_LIST();
  },
  methods: {
    ...mapActions(["CREATE_PROJECT", "GET_PROJECT_LIST"]),
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    onSendProjectName() {
      if (this.projectName.length === 0) {
        WarningToast("보드 이름을 입력하세요.");
      } else {
        this.CREATE_PROJECT({ title: this.projectName })
          .then(id => {
            this.$router.push(`/issue/${id}`);
            this.projectName = "";
            this.closeModal();
            SuccessToast("프로젝트 생성이 완료되었습니다.");
          })
          .catch(() => ErrorToast("다시 시도하세요."));
      }
    },
    onProject(id) {
      this.$router.push(`/issue/${id}`);
    },
    a() {
      confirmAlert("해당 프로젝트를 삭제하시겠습니까?", "warning", () =>
        console.log("삭제")
      );
    }
  }
};
</script>