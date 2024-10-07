<template>
  <div class="home">
    <Header />
    <Category />
    <Goods></Goods>
  </div>
</template>

<script setup>
import Category from './Category.vue'
import Goods from './Goods.vue'
import Header from './Header.vue'
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
