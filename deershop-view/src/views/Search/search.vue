<template>
  <div class="search h-full flex flex-col">
    <header class="flex bg-white bb-1 fixed t-0px w-full">
      <div class="category">
        <van-icon
          name="arrow-left"
          color="var(--el-text-color-secondary)"
          @click="() => router.back()"
        />
      </div>

      <div class="search-input flex-1 mr-4">
        <van-search
          class="w-full p-0"
          v-model="searchText"
          placeholder="请输入搜索关键词"
          shape="round"
          @search="onSearch"
          @clear="clearSearch"
          @click-input="clickSearch"
        >
        </van-search>
      </div>

      <div class="message">
        <a v-if="route.path === '/search'" class="fs-base text-color-regular">搜索</a>
        <van-icon
          v-else
          name="shopping-cart-o"
          color="var(--el-text-color-secondary)"
          @click="() => router.push('/shoppingCar')"
        />
      </div>
    </header>

    <div class="h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import bus from '@/utils/bus'

defineOptions({
  name: 'Search'
})

const router = useRouter()
const route = useRoute()

const searchText = ref('')
bus.on('changeSearchText', (e) => {
  searchText.value = e
})
const SEARCH_HISTORY = 'SEARCH_HISTORY'
function onSearch(e) {
  if (e === 0 || !e) {
    return
  }
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
      searchText: e
    }
  })
}
function clearSearch(e) {
  searchText.value = ''
}

function clickSearch() {
  if (route.path !== '/search') {
    router.replace('/search')
  }
}
</script>

<style lang="scss" scoped>
$square: 48px;
.search {
  padding-top: $square;

  header {
    height: $square;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .category,
    .message {
      width: $square;
    }
  }
}
</style>
