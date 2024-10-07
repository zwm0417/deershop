<template>
  <!-- 历史搜索 -->
  <div class="search-index bg-white h-full">
    <div class="search-history bb-1 p-8 fs-base text-color-secondary">
      <div class="flex jc-sb">
        <div>
          <van-icon name="search"></van-icon>
          历史搜索
        </div>
        <van-icon name="delete-o" size="18" @click="clearAllHistory"></van-icon>
      </div>

      <div class="history-list mt-6 ml-8">
        <span v-if="historyList.length === 0">暂无历史记录</span>
        <van-tag
          v-for="(item, index) in historyList"
          :key="index"
          class="mb-4"
          :class="{ 'ml-4': index > 0 }"
          show
          plain
          closeable
          size="medium"
          text-color="var(--el-text-color-secondary)"
          @click="search(item)"
          @close="delHistory(index)"
        >
          {{ item.query }}
        </van-tag>
      </div>
    </div>

    <!-- 热门搜索 -->
    <div class="search-hot p-8 fs-base text-color-secondary">
      <div class="flex jc-sb">
        <div>
          <van-icon name="star-o"></van-icon>
          热门搜索
        </div>
      </div>

      <div class="history-list mt-6 ml-8">
        <span v-if="hotWords.length === 0">暂无热门记录</span>
        <van-tag
          v-for="(item, index) in hotWords"
          :key="index"
          class="mb-4"
          :class="{ 'ml-4': index > 0 }"
          show
          plain
          size="medium"
          :text-color="item.color || 'var(--el-text-color-secondary)'"
          @click="search(item)"
        >
          {{ item.frontword }}
        </van-tag>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getHotWords } from '@/api/home'
import bus from '@/utils/bus'

defineOptions({
  name: 'SearchIndex'
})

const SEARCH_HISTORY = 'SEARCH_HISTORY'

const router = useRouter()
const hotWords = ref([])

const historyList = ref([])
function delHistory(i) {
  /** @type {Array} */
  let needDelName = historyList.value[i].query
  const currentHistory = JSON.parse(localStorage.getItem(SEARCH_HISTORY)) || []
  const delIndex = currentHistory.findIndex((item) => item.query === needDelName)
  if (currentHistory.some((x) => x.query === needDelName)) {
    currentHistory.splice(delIndex, 1)
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(currentHistory.slice(0, 10)))
  }
  historyList.value.splice(i, 1)
}

function clearAllHistory() {
  showConfirmDialog({
    message: '是否清楚历史记录？'
  }).then(() => {
    historyList.value = []
    localStorage.setItem(SEARCH_HISTORY, '')
  })
}

function search(item) {
  bus.emit('changeSearchText', item.query)

  let e = item.query

  /** @type {Array} */
  const currentHistory = JSON.parse(localStorage.getItem(SEARCH_HISTORY) || '[]')
  e = e.trim()
  if (!currentHistory.some((x) => x.query === e)) {
    currentHistory.unshift({ query: e })
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(currentHistory.slice(0, 10)))
  }

  router.push({
    path: '/search/result',
    query: {
      searchText: item.query
    }
  })
}

onMounted(() => {
  historyList.value = JSON.parse(localStorage.getItem(SEARCH_HISTORY) || '[]')

  getHotWords().then((res) => {
    console.log('res: ', res)
    hotWords.value = res.data.list
  })
})
</script>

<style lang="scss" scoped></style>
