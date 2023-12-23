<template>
  <div>
    <h2>当前得分：{{ score }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        score: 0,
      };
  },
  computed: {
    ...mapState(["answerId"]),
    ...mapGetters(["rightAnswer"]),
  },
  created() {
    let every = 100 / this.answerId.length;
    // 取整

    this.answerId.forEach((item,index) => {
      if(item === this.answerId[index]){
        this.score += every;
      }
      every = Math.floor(every);
    });
    }
  }
</script>

<style lang="less" scoped>
h2{
  color: #fff;
}
</style>