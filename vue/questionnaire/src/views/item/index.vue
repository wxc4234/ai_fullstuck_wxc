<template>
  <div>
    <ItemContainer parentComponent="item" />
  </div>
</template>

<script>
import ItemContainer from "@/components/ItemContainer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    ItemContainer,
  },
  created() {
    //生命周期函数 在页面加载的过程中会自动触发
    this.getQuestionsListAction();
  },
  methods: {
    ...mapActions(['getQuestionsListAction']),
  },
};
</script>

<style lang="less" scoped></style>
