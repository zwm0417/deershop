import { defineStore } from 'pinia'
import { ref } from 'vue'

// 商品详情页

export const useGoodsStore = defineStore(
  'goods',
  () => {
    const current = ref({})

    return { current }
  },
  {
    persist: true
  }
)
