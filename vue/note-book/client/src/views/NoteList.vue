<template>
  <div>
    <Back />

    <div class="note-list">
      <ul v-if="state.noteList.length">
        <li
          v-for="item in state.noteList"
          :key="item.id"
          @click="goNoteDetail(item.id)"
        >
          <div
            class="img"
            @touchstart.prevent="startLongPress(item.id)"
            @touchend="cancelLongPress"
          >
            <img :src="item.head_img" alt="" ref="noteImage" />
          </div>
          <p class="time">{{ item.c_time }}</p>
          <p class="title">{{ item.title }}</p>
        </li>
      </ul>
      <p class="empty" v-else>当前分类下还没有文章哦~~</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import axios from "@/api";
import Back from "@/components/Back.vue";

const state = reactive({
  noteList: [],
});
const selectedItemId = ref(null);
const route = useRoute();
const router = useRouter();

let longPressTimer = null;

onMounted(async () => {
  // 向后端请求数据
  const res = await axios.post("/findNoteListByType", {
    note_type: route.query.title,
  });
  state.noteList = res.data;
});

const goNoteDetail = (id) => {
  router.push({ path: "/noteDetail", query: { id: id } });
};

const startLongPress = (id) => {
  longPressTimer = setTimeout(() => {
    selectedItemId.value = id;
    console.log("长按图片，显示删除选项。");
  }, 1000); // 1 秒
};

const cancelLongPress = () => {
  clearTimeout(longPressTimer); // 清除定时器
  showConfirmDialog({
    title: "删除",
    message: "确定删除这篇文章吗？",
  })
    .then(() => {
      console.log("删除文章");
      console.log(selectedItemId.value);
      axios
        .post("/deleteNote", {
          id: selectedItemId.value,
        })
        .then(() => {
          // 删除成功后更新页面
          state.noteList = state.noteList.filter(
            (item) => item.id !== selectedItemId.value
          );
          console.log("删除成功");
        })
        .catch((error) => {
          console.error("删除失败", error);
        });
    })
    .catch(() => {
      console.log("取消删除");
    });
};
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1.5rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    li {
      img {
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }
      .time {
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title {
        width: 3.5rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .img {
        position: relative; /* 添加此行 */
      }

      .delete-icon {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 20px;
        color: red;
        z-index: 9999;
      }
    }
  }
}
</style>
