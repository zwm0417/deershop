<template>
  <header class="flex bg-white bb-1">
    <div class="category">
      <van-icon name="bars" color="var(--el-text-color-secondary)" @click="toCategory" />
    </div>

    <div class="search flex-1">
      <van-search
        class="w-full p-0"
        autofocus
        v-model="value"
        placeholder="请输入搜索关键词"
        shape="round"
        @click-input="toSearchPage"
      >
      </van-search>
    </div>

    <div class="message">
      <van-icon name="chat-o" color="var(--el-text-color-secondary)" />
    </div>
  </header>
</template>

<script setup>
defineOptions({
  name: 'Header'
})
const router = useRouter()
const value = ref('')

function toSearchPage() {
  router.push({
    path: '/search'
  })
}

function toCategory() {
  router.push({
    path: '/category'
  })
}
</script>

<style lang="scss" scoped>
$square: 48px;

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
</style>
