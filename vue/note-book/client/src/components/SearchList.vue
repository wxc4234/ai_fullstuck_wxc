<template>
    <div class="note-list">
        <ul v-if="searchList.length">
            <li v-for="item in searchList" :key="item.id" @click="goNoteDetail(item.id)">
                <div class="img">
                    <img :src="item.head_img" alt="">
                </div>
                <p class="time">{{ item.c_time }}</p>
                <p class="title">{{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
    searchList: Array
})
// 去笔记详情页
const goNoteDetail = (id) => {
    router.push({ path: '/noteDetail', query: { id: id } })
}

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
                text-align: center;
                width: 3.5rem;
                font-size: 0.37rem;
                color: rgba(16, 16, 16, 1);
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>