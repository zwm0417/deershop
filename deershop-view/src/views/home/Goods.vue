<template>
  <div class="good-list w-full p-4">
    <div
      class="good-item bg-white b-radius overflow-hidden"
      v-for="item in goodList"
      :key="item.itemId"
    >
      <div class="good-media-wrap relative">
        <div class="good-media-image">
          <img :src="item.itemImage" alt="" class="w-full block" />
        </div>
        <div class="good-media-actor flex ai-center fs-extra-small px-4 py-6 text-white">
          <div class="good-media-actor-avatar b-radius-circle overflow-hidden b-1">
            <img :src="item.actorAvatar" alt="" class="w-10 block" />
          </div>
          <div class="good-media-actor-name px-2">
            <span>{{ item.actorName }}</span>
          </div>
          <div v-if="item.actorTag" class="good-media-actor-tag b-radius px-2">
            <span>{{ item.actorTag }}</span>
          </div>
        </div>
      </div>

      <div class="good-info p-4">
        <div class="good-title ellipsis-2 fs-base mb-4">{{ item.title }}</div>
        <div class="good-price text-danger flex jc-sb ai-center fs-extra-small">
          <div>
            <span>¥</span>
            <span class="fs-medium">{{ handlePrice(item.showDiscountPrice) }}</span>
            <span>{{ handlePrice(item.showDiscountPrice, true) }}</span>
          </div>
          <div class="good-sale-num px-2 b-radius">
            {{ item.sale }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getHomeGoods } from '@/api/home'

const goodList = ref([])

/**
 * 处理金额
 * @param {string} num 金额
 * @param {boolean} isFen 是否返回分
 */
function handlePrice(num, isFen = false) {
  let pArr = num.split('.')
  let [priceLeft, priceRight] = pArr
  if (isFen) return '.' + priceRight
  else return priceLeft
}

onBeforeMount(() => {
  getHomeGoods().then((res) => {
    goodList.value = res.data.list
  })
})
</script>

<style lang="scss" scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .good-item {
    width: calc(50% - 5px);
    // flex: 1;
    // border-radius: var(--el-border-radius-base);
    // overflow: hidden;
    .good-media-actor {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      // z-index: 1;
      background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.5));
      background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5));
      .good-media-actor-tag {
        background-color: rgba($color: #000000, $alpha: 0.35);
        font-size: 10px;
      }
    }

    .good-info {
      .good-sale-num {
        background-color: rgba(255, 0, 0, 0.1);
      }
    }
  }
}
</style>
