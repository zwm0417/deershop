<template>
  <van-tabbar v-model="current" active-color="#409eff" @click="switchPage(item)">
    <van-tabbar-item
      replace
      :to="item.path"
      v-for="item in menuList"
      :key="item.path"
      :icon="item.icon"
      :info="item.info"
      @click="switchPage(item)"
      >{{ item.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup>
const router = useRouter()

/**
 * @typedef menu
 * @property {string} title 标题
 * @property {string} path 路劲
 * @property {string} icon icon
 * @property {string} info 消息数
 */

/** @type {Ref<menu[]>} 菜单列表 */
const menuList = ref([
  { title: '首页', path: '/home', icon: 'home-o', info: '' },
  { title: '商城', path: '/shopping', icon: 'bag-o', info: '' },
  { title: '直播', path: '/live', icon: 'play-circle-o', info: '' },
  { title: '我的', path: '/my', icon: 'user-o', info: '' }
])
/** @type {Ref<string>} 当前标题 */
const current = ref('首页')

/**
 * 改变页面
 * @param {menu} e
 */
const switchPage = (e) => {
  // console.log('e: ', e)
  // current.value = e.title
  // router.replace({
  //   path: e.path
  // })
}
</script>

<style lang="scss" scoped></style>
