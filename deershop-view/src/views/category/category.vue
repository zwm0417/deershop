<template>
  <div class="category">
    <header class="category-search flex bg-white bb-1 fixed t-0px w-full">
      <div class="chat">
        <van-icon
          name="chat-o"
          color="var(--el-text-color-secondary)"
          size="20"
          @click="router.back()"
        />
      </div>

      <div class="search-input flex-1 mr-4">
        <van-search
          class="w-full p-0"
          placeholder="请输入搜索关键词"
          shape="round"
          @click-input="clickSearch"
        >
        </van-search>
      </div>

      <div class="message">
        <van-icon
          name="shopping-cart-o"
          color="var(--el-text-color-secondary)"
          size="20"
          @click="() => router.push('/shoppingCar')"
        />
      </div>
    </header>

    <div class="category-main h-full">
      <div class="fixed overflow-y-auto h-full">
        <van-sidebar v-model="active">
          <van-sidebar-item v-for="(item, index) in sidebarList" :key="index" :title="item.title" />
        </van-sidebar>
      </div>

      <categoryDetail :category-id="active"></categoryDetail>
    </div>
  </div>
</template>

<script setup>
import categoryDetail from './detail.vue'

defineOptions({
  name: 'category'
})

const router = useRouter()

function clickSearch() {
  router.replace('/search')
}

const active = ref(0)
const sidebarList = [
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3k.117330.0.5KcplupoOMxH2.pos_870-m_426420-sd_119',
    title: '正在流行',
    miniWallkey: '10062603',
    _material_start_time: 1528253439,
    maitKey: '3627',
    _system_record_entry_id: '426420'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3m.117330.0.5KcplupoOMxH3.pos_871-m_426421-sd_119',
    title: '上衣',
    miniWallkey: '50003',
    _material_start_time: 1528253463,
    maitKey: '582',
    _system_record_entry_id: '426421'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3o.117330.0.5KcplupoOMxH4.pos_872-m_426422-sd_119',
    title: '裤子',
    miniWallkey: '50005',
    _material_start_time: 1528253485,
    maitKey: '596',
    _system_record_entry_id: '426422'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3q.117330.0.5KcplupoOMxH5.pos_873-m_426423-sd_119',
    title: '裙子',
    miniWallkey: '50004',
    _material_start_time: 1528253507,
    maitKey: '595',
    _system_record_entry_id: '426423'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3s.117330.0.5KcplupoOMxH6.pos_874-m_426424-sd_119',
    title: '内衣',
    miniWallkey: '50006',
    _material_start_time: 1528253532,
    maitKey: '598',
    _system_record_entry_id: '426424'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3u.117330.0.5KcplupoOMxH7.pos_875-m_426425-sd_119',
    title: '女鞋',
    miniWallkey: '50532',
    _material_start_time: 1528253563,
    maitKey: '597',
    _system_record_entry_id: '426425'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3w.117330.0.5KcplupoOMxH8.pos_876-m_426426-sd_119',
    title: '男友',
    miniWallkey: '51716',
    _material_start_time: 1528253587,
    maitKey: '599',
    _system_record_entry_id: '426426'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia3y.117330.0.5KcplupoOMxH9.pos_877-m_426427-sd_119',
    title: '包包',
    miniWallkey: '50675',
    _material_start_time: 1528253609,
    maitKey: '600',
    _system_record_entry_id: '426427'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia40.117330.0.5KcplupoOMxHa.pos_878-m_426428-sd_119',
    title: '运动',
    miniWallkey: '10056587',
    _material_start_time: 1528253633,
    maitKey: '5253',
    _system_record_entry_id: '426428'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia42.117330.0.5KcplupoOMxHb.pos_879-m_426429-sd_119',
    title: '配饰',
    miniWallkey: '50797',
    _material_start_time: 1528253657,
    maitKey: '609',
    _system_record_entry_id: '426429'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia46.117330.0.5KcplupoOMxHc.pos_880-m_426431-sd_119',
    title: '美妆',
    miniWallkey: '50010',
    _material_start_time: 1528253676,
    maitKey: '594',
    _system_record_entry_id: '426431'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia48.117330.0.5KcplupoOMxHd.pos_881-m_426432-sd_119',
    title: '个护',
    miniWallkey: '52378',
    _material_start_time: 1528253698,
    maitKey: '830',
    _system_record_entry_id: '426432'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia4a.117330.0.5KcplupoOMxHe.pos_882-m_426433-sd_119',
    title: '家居',
    miniWallkey: '10057031',
    _material_start_time: 1528253725,
    maitKey: '602',
    _system_record_entry_id: '426433'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia4c.117330.0.5KcplupoOMxHf.pos_883-m_426434-sd_119',
    title: '百货',
    miniWallkey: '10060232',
    _material_start_time: 1528253744,
    maitKey: '606',
    _system_record_entry_id: '426434'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia4e.117330.0.5KcplupoOMxHg.pos_884-m_426435-sd_119',
    title: '母婴',
    miniWallkey: '20003089',
    _material_start_time: 1528253793,
    maitKey: '603',
    _system_record_entry_id: '426435'
  },
  {
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1ia4k.117330.0.5KcplupoOMxHh.pos_885-m_426438-sd_119',
    title: '食品',
    miniWallkey: '52014',
    _material_start_time: 1528253823,
    maitKey: '605',
    _system_record_entry_id: '426438'
  }
]
</script>

<style lang="scss" scoped>
$square: 48px;
.category {
  padding-top: $square;

  header {
    z-index: 9;
    height: $square;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .chat,
    .message {
      width: $square;
    }
  }
}

.category-main div:nth-child(1)::-webkit-scrollbar {
  display: none;
}

.van-sidebar {
  .van-sidebar-item {
    padding: 12px;
    &.van-sidebar-item--select {
      color: #ff5577;
      &:before {
        background-color: #ff5577;
      }
    }
  }
}
</style>
