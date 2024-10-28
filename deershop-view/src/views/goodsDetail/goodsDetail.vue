<template>
  <div class=" ">
    <div class="content-detail bg-white">
      <van-swipe class="my-swipe" height="300" :autoplay="3000" indicator-color="white" lazy-render>
        <van-swipe-item v-for="(item, index) in imgs" :key="index">
          <!-- <img :src="getRealURL(item)" alt="" /> -->
          <img :src="item" alt="" class="swipe-img" style="object-fit: cover" />
        </van-swipe-item>
      </van-swipe>

      <div class="price-detail px-4">
        <div class="flex jc-sb fs-large h-20 ai-center">
          <div>
            ￥<span>{{ current.showDiscountPrice }}</span>
          </div>
          <div>已售{{ current.sale }}</div>
        </div>

        <div class="fs-base">{{ current.title }}</div>
      </div>
    </div>

    <div class="decide-bar bg-white h-30 flex fs-base fixed b-0px w-full ai-center bt-1">
      <div>
        <van-icon name="shop-o" size="20" />
        <p>店铺</p>
      </div>
      <div class="text-danger">
        <van-icon name="chat-o" size="20" />
        <p>客服</p>
      </div>
      <div>
        <van-icon name="star-o" size="20" />
        <p>收藏</p>
      </div>
      <div class="text-b add-car">加入购物车</div>
      <div class="text-b buy-now">立即购买</div>
    </div>
  </div>
</template>

<script setup>
import { useGoodsStore } from '@/stores/goods'
import { storeToRefs } from 'pinia'

const { current } = storeToRefs(useGoodsStore())

const imgs = ref([])

onBeforeMount(() => {
  let i = 0
  while (i < 5) {
    imgs.value.push(current.value.itemImage)
    i++
  }
})

function getRealURL(url) {
  let aaa = new URL(`../../assets/imgs/${url}`, import.meta.url).href
  return aaa
}
</script>

<style lang="scss" scoped>
.decide-bar {
  > div {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;
    border-right: var(--el-border);
    &:nth-last-child(1) {
      border-right: 0;
    }
  }
  .text-b {
    flex-basis: 10%;
  }
  .add-car {
    color: var(--el-color-danger);
    background-color: rgb(255, 236, 239);
  }
  .buy-now {
    color: white;
    background-color: rgb(255, 72, 141);
  }
}
</style>
