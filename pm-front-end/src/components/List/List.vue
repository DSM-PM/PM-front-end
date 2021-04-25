<template>
  <div class="list-container">
    <p class="list-container-title">{{listInfo.title}}</p>
    <card
      v-for="(i) in issueList"
      :key="i.id"
      :issueList="i"
      :category="listInfo.title === i.category"
    />
    <div v-if="isAddCard">
      <add-card
        :boardId="$route.params.id"
        :listCategory="listInfo.title"
        @close="isAddCard = false"
      ></add-card>
    </div>
    <a v-else class="add-card-btn" href @click.prevent="isAddCard = true">&plus; Add a card...</a>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CardItem from "../Card/CardItem";
import AddCard from "../Card/AddCard";
export default {
  props: ["listInfo"],
  components: { card: CardItem, "add-card": AddCard },
  data() {
    return {
      isAddCard: true
    };
  },
  computed: {
    ...mapState({
      issueList: "issueList"
    })
  },
  created() {
    this.GET_ISSUE({ id: this.$route.params.id });
    console.log(this.issueList);
  },
  methods: {
    ...mapActions(["GET_ISSUE"])
  }
};
</script>

<style lang="scss" >
.list {
  display: flex;
  &-container {
    overflow: scroll;
    background-color: #93959710;
    border-radius: 0.8rem;
    margin-left: 2.5rem;
    vertical-align: top;
    width: 22%;
    height: 49rem;
    max-height: 100%;
    padding: 1.4rem;
  }
}
.add-card-btn {
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>