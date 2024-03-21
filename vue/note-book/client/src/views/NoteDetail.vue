<template>
  <div class="note-detail">
    <Back />

    <div class="note-img">
      <img :src="noteDetail.head_img" alt="">
    </div>

    <div class="note-content">
      <div class="tab">
        <span class="note_type">{{noteDetail.note_type}}</span>
        <span class="author">{{noteDetail.nickname}}</span>
      </div>
      <p class="title">{{noteDetail.title}}</p>
      <div class="content" v-html="noteDetail.note_content"></div>
    </div>

    <div class="edit" @click="goEdit">
      <van-icon name="records-o" size="30"/>
    </div>

  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from '@/api'
import Back from '@/components/Back.vue'

const route = useRoute()
const router = useRouter()
const noteDetail = ref({})

onMounted(async() => {
  const res = await axios.get('/findNoteDetailById', {
    params: {
      id: route.query.id
    }
  })
  noteDetail.value = res.data
  console.log(res);
})

const goEdit = () => {
  router.push({ path: '/notePublish', query: {id: route.query.id}})
}
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
  .edit{
    position: fixed;
    right: 10px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(16, 16, 16, 0.3);
    box-shadow: 0 0 5px #aaa;
    text-align: center;
    line-height: 50px;
  }
}
</style>