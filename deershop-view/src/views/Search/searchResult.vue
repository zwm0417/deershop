<template>
  <div class="search-result">
    <div class="sort-wrapper relative h-20">
      <div
        class="w-full h-20 flex jc-se ai-center fixed t-48px bg-white fs-base text-color-regular"
      >
        <a>综合</a>
        <a>销量</a>
        <a>新品</a>
        <a>价格</a>
      </div>

      <!-- 价格筛选浮窗 -->
    </div>

    <div class="result-list">
      <span v-if="dataList.length === 0">暂无搜索结果</span>
      <ul class="list-wrapper p-4">
        <li v-for="(item, index) in dataList" :key="item.iid" class="b-radius overflow-hidden">
          <div class="">
            <img :src="item.itemImage" alt="" class="w-full block" />
          </div>
          <div class="fs-small bg-white p-4">
            <p class="ellipsis-2 mb-4 text-color-regular">{{ item.title }}</p>
            <div class="flex jc-sb">
              <span class="bold">¥{{ item.showDiscountPrice }}</span>
              <div class="fs-small text-color-placeholder">
                <span> {{ item.cfav || 0 }} </span> <van-icon name="star-o" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getGoodList } from '@/api/goods'
const route = useRoute()

const dataList = ref([])

onMounted(() => {
  console.log('route: ', route.query)
  const params = {
    q: route.query.searchText
  }
  getGoodList(params).then((res) => {
    console.log('res: ', res)
    dataList.value = res.data.list.slice(0, 10)
  })
})
</script>

<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  li {
    // height: 6.2rem;
  }
}
</style>
