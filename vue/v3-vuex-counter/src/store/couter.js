// 数据要共享,store 里面的数据是共享的
// store是仓库
// 组件是小卖部里的货架
// 进货的过程

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  return{
    count
  }
})