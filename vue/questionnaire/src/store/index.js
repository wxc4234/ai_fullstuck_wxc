import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //存放数据 就相当于data
    questionsList: [],
    itemNum: 1, //第几题
    answerId: [], //答案id
  },
  getters: {
    //存放计算属性 就相当于computed
    rightAnswer(state) {
      let arr = [];
      for (let questions of state.questionsList) {
        for (let answer of question.topic_answer) {
          if(answer.is_standard_answer === 1) {
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: {
    //存放方法 就相当于methods
    getQuestionsList(state, list) {
      //所有写在mutations里面的函数第一个参数都是state
      state.questionsList = list;
    },
    nextItem(state) {
      state.itemNum += 1;
    },
    // 存储答案id
    saveAnswer(state, id) {
      state.answerId.push(id);
    },
  },
  actions: {
    //存放异步方法 就相当于methods 但是actions里面的方法是异步的
    getQuestionsListAction(context) {
      //所有写在actions里面的函数第一个参数都是context
      axios
        .get(
          "https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/questions"
        )
        .then((res) => {
          console.log(res);
          context.commit("getQuestionsList", res.data); //调用mutations里面的方法 触发mutations里面的方法
        });
    },
    nextItemAction({ commit }, id) {
      if (this.state.itemNum < this.state.questionsList.length) {
        commit("nextItem");
      }
      commit("saveAnswer", id);
    },
  },
  modules: {},
});
