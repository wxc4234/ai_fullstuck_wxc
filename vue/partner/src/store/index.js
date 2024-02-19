import { createStore } from "vuex";

// 构建一个仓库收集数据，用于组件之间的数据共享
const store = createStore({
  state: {
    sex: "男",
    age: "",
    address: "",
    currentPage: "Home",
    data: [
      {
        id: 1,
        name: "小红",
        age: 18,
        occupation: "白领",
        address: "北京",
        maritalStatus: "未婚",
        height: 165,
        weight: "50kg",
        personality: "温柔",
        image:
          "https://tse3-mm.cn.bing.net/th/id/OIP-C.QLINf5V6zSGBbY8vS2soHAHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        introduction: "我的性格活泼开朗，待人真诚热情，能够吃苦耐劳。我对工作的态度严谨细致，有着较强的责任感，良好的适应能力和学习能力，乐于接受新的挑战。",
      },
      {
        id: 2,
        name: "小美",
        age: 20,
        occupation: "设计师",
        address: "上海",
        maritalStatus: "未婚",
        height: 155,
        weight: "45kg",
        personality: "阳光",
        image:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.YT7v5PPc4VOfuGlRKq7GUwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 3,
        name: "小花",
        age: 22,
        occupation: "白领",
        address: "广州",
        maritalStatus: "未婚",
        height: 160,
        weight: "45kg",
        personality: "活泼",
        image:
          "https://tse1-mm.cn.bing.net/th/id/OIP-C.m-JM7IHUZavVMA6mTpy4PQHaNK?w=196&h=330&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 4,
        name: "韩梅",
        age: 25,
        occupation: "程序员",
        address: "深圳",
        maritalStatus: "未婚",
        height: 160,
        weight: "55kg",
        personality: "幽默",
        image:
          "https://tse4-mm.cn.bing.net/th/id/OIP-C.aXYnYar_KQoizVpnf6zVyQHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 5,
        name: "丽丽",
        age: 28,
        occupation: "美甲师",
        address: "杭州",
        maritalStatus: "未婚",
        height: 170,
        weight: "58kg",
        personality: "豪爽",
        image:
          "https://tse2-mm.cn.bing.net/th/id/OIP-C.YjXj2e6jCunTmxy8ipd5DwHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        introduction: "hello，交个朋友吧！",
      },
    ],
    data2: [
      {
        id: 1,
        name: "小明",
        age: 28,
        occupation: "程序员",
        address: "北京",
        maritalStatus: "未婚",
        height: 175,
        weight: "60kg",
        personality: "阳光",
        image:
          "https://img.zcool.cn/community/01e4d459522cd2a8012193a34ff883.jpg@1280w_1l_2o_100sh.jpg",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 2,
        name: "小李",
        age: 30,
        occupation: "设计师",
        address: "上海",
        maritalStatus: "未婚",
        height: 165,
        weight: "55kg",
        personality: "温柔",
        image:
          "https://ts1.cn.mm.bing.net/th/id/R-C.ff6cafa72bcaaa90bb03609416ac4a17?rik=DVDNNoK11gn8VA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f69%2f6769.jpg&ehk=qQ%2bUmPxq6jVK7rhfewGEZ8Ev88EB4hcKy%2br1IXJH%2fkc%3d&risl=&pid=ImgRaw&r=0",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 3,
        name: "小张",
        age: 32,
        occupation: "白领",
        address: "广州",
        maritalStatus: "未婚",
        height: 160,
        weight: "50kg",
        personality: "开朗",
        image:
          "https://ts1.cn.mm.bing.net/th/id/R-C.57af75fc237d3843a9f276b6ffb7f1b4?rik=JnRXzAnsrAYceQ&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f48%2f9748_6.jpg&ehk=MjK5DYceJvVs0D82A%2fQveT5mxqdHwaIIdRCEy1o1Vsw%3d&risl=&pid=ImgRaw&r=0",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 4,
        name: "小王",
        age: 35,
        occupation: "保安",
        address: "深圳",
        maritalStatus: "未婚",
        height: 165,
        weight: "55kg",
        personality: "幽默",
        image:
          "https://ts1.cn.mm.bing.net/th/id/R-C.49bea2fccbfb81cc5becff0907608d4d?rik=rCenXyHlKaDHHA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f48%2f9748_3.jpg&ehk=Dcssoe1l9%2b0goz4OIBotVSbpJY2giEwNo%2bJw0h6WDgI%3d&risl=&pid=ImgRaw&r=0",
        introduction: "hello，交个朋友吧！",
      },
      {
        id: 5,
        name: "小赵",
        age: 38,
        occupation: "工程师",
        address: "杭州",
        maritalStatus: "未婚",
        height: 170,
        weight: "68kg",
        personality: "豪爽",
        image:
          "https://ts1.cn.mm.bing.net/th/id/R-C.d485df532673ed9735a276cbff94de58?rik=oLr4Qu4U0GRVWg&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f48%2f9748_5.jpg&ehk=7Vu9bKGlmgPqtpALZbpG3Mv5NDvaYiuS4Folgs%2fzOqk%3d&risl=&pid=ImgRaw&r=0",
        introduction: "hello，交个朋友吧！",
      },
    ],
  },
  mutations: {
    getSex(state, value) {
      state.sex = value;
    },
    getAge(state, value) {
      state.age = value;
    },
    getAddress(state, value) {
      state.address = value;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    updateSex(context, value) {
      context.commit("getSex", value);
    },
    getAgeAction(context, value) {
      context.commit("getAge", value);
    },
    getAddressAction(context, value) {
      context.commit("getAddress", value);
    },
    updateCurrentPage(context, page) {
      context.commit("setCurrentPage", page);
    },
  },
  getters: {
    //  添加一个getter,用于获取state中的sex数据
    putSex: (state) => state.sex,
    getAgeGetter: (state) => state.age,
    getAddressGetter: (state) => state.address,
    getCurrentPage: (state) => state.currentPage,
  },
});

export default store;
