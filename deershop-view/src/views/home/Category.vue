<template>
  <div class="bg-white">
    <ul class="category">
      <li
        v-for="item in categories"
        :key="item._system_record_entry_id"
        class="w-full h-full flex flex-col jc-center ai-center"
      >
        <img class="w-25" :src="item.image" alt="" />
        <span class="text-color-regular fs-small text-center">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getHomeCategory } from '@/api/home'

defineOptions({
  name: 'Category'
})

const categories = ref()

onBeforeMount(() => {
  getHomeCategory().then((res) => {
    categories.value = res.data.list
      .sort((a, b) => {
        return a.sort - b.sort
      })
      .splice(0, 10)
  })
})
</script>

<style lang="scss" scoped>
.category {
  display: grid;
  grid-template: 75px 75px / repeat(5, 1fr);
  row-gap: 4px;
}
</style>
