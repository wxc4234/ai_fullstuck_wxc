<template>
      <!-- 样式文本 key value -->
      <div :style="fontStyle">
        <div class="rate" @mouseout="mouseOut">
          <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">
            ☆
          </span>
          <span class="hollow" :style="fontWidth">
            <span v-for="num in 5" :key="num" @click="onRate(num)">★</span>
          </span>
        </div>
      </div>

</template>

<script setup>
// 交接一下
import { defineProps, computed, ref ,defineEmits} from 'vue' //defineProps 定义属性, computed 计算属性
//rate 要有自己的分值响应式变量
const themeObj = {
  black: '#000',
  orange: '#fa5413',
  green: '#73d13d',
  blue: '#40a9ff',
  red: '#f5222d'
}
const props = defineProps({
  value: Number,
  theme: {
    type: String,
    default: 'orange'

  }
})

const emits = defineEmits(['update-rate'])
// 动态的 UI状态
let width=ref(props.value)
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
let fontStyle = computed(() => `color:${themeObj[props.theme]}`)
let fontWidth = computed(() => `width:${width.value}em`)

const mouseOver = (i) => {
  // props.$emit('update:value', num)
  width.value=i
}
const mouseOut = () => {
  width.value=props.value
}
const onRate = (num) => {
  // 数据和状态的统一
  // props.$emit('update:value', num)
  emits('update-rate',num)

}
</script>

<style scoped>
.rate{
  position: relative;
  display: inline-block;
  font-size: 0;
}
.rate span{
  font-size: 16px;

}
.rate > span.hollow{
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>