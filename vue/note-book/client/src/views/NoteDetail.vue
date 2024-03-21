<template>
  <div>
  <Back />
  <div class="note-detail">
    <div class="note-img">
      <img :src="noteDetail.head_img" alt="">
    </div>
    <div class="note-content">
      <div class="tab">
        <span class="note_type">{{ noteDetail.note_type }}</span>
        <span class="author">{{ noteDetail.nickname }}</span>
      </div>
      <p class="title">{{ noteDetail.title }}</p>
      <div class="content" v-html="noteDetail.note_content"></div>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from '@/api'
import { onMounted ,ref} from 'vue';
import { useRoute } from 'vue-router';
import Back from '@/components/Back.vue'

const route = useRoute()
const noteDetail = ref({})

onMounted(async() => {
  const res = await axios.get ('/findNoteDetailById', {
    params: {
      id: route.query.id
    }
  })
  noteDetail.value = res.data
  console.log(res)
})

</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>