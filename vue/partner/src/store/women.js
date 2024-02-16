import { createStore } from "vuex";

const store2 = createStore({
  state: {
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
        image: "../images/women/1.jpg",
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
        image: "../images/women/2.jpg",
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
        image: "../images/women/3.jpg",
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
        image: "../images/women/4.jpg",
      },
      {
        id: 5,
        name: "丽丽",
        age: 28,
        occupation: "老板",
        address: "杭州",
        maritalStatus: "未婚",
        height: 170,
        weight: "58kg",
        personality: "豪爽",
        image: "../images/women/5.jpg",
      },
    ],
  }
});

export default store2;