import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getBannersData } from '../api/index'

export const useBannerStore = defineStore('banner', () => {
    let banners  = ref([])
    return {
        banners,
        getBanners: async () => {
            const data = await getBannersData();
            // setBanners(banners)
            // console.log(data, '///')
            banners.value = data
        }
    }
})