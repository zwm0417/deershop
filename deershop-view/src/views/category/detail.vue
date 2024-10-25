<template>
  <div class="category-detail bg-white">
    <div class="category-detail-inline p-4">
      <div v-for="(item, index) in list" :key="index" class="list-item p-4 text-center">
        <div class="p-4"><img :src="item.image" alt="" /></div>
        <div class="fs-base">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categoryId: {
    type: Number,
    default: 0
  }
})

const originData = [
  {
    link: '//act.mogu.com/fastbuybag?acm=3.mce.1_10_1seoy.600.0.5KcplusdsE6wc.pos_870-m_662677-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1seoy.600.0.5KcplusdsE6wc.pos_870-m_662677-sd_119',
    title: '9.9秒杀',
    startTime: 1541347200,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210303_589dbi4a9a706b1h6dgif666a7645_150x150.webp',
    _material_start_time: 1541347200,
    sort: 1,
    endTime: 0,
    _system_record_entry_id: '662677'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=20005809&title=斜挎包&acm=3.mce.1_10_1og1q.600.0.5KcplusdsE6wd.pos_871-m_570243-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1og1q.600.0.5KcplusdsE6wd.pos_871-m_570243-sd_119',
    title: '斜挎包',
    startTime: 1541347200,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_2a314jc22jf08bh1l767haj6degh1_200x200.png',
    _material_start_time: 1541347200,
    sort: 3,
    endTime: 0,
    _system_record_entry_id: '570243'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=50657&title=双肩包&acm=3.mce.1_10_1og1w.600.0.5KcplusdsE6we.pos_872-m_570246-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1og1w.600.0.5KcplusdsE6we.pos_872-m_570246-sd_119',
    title: '双肩包',
    startTime: 1567526400,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_6ajlkc8i25babg6kjcb8lgbfg8l3f_200x200.png',
    _material_start_time: 1567526400,
    sort: 4,
    endTime: 0,
    _system_record_entry_id: '570246'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=20004397&title=单肩包&acm=3.mce.1_10_1og1s.600.0.5KcplusdsE6wf.pos_873-m_570244-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1og1s.600.0.5KcplusdsE6wf.pos_873-m_570244-sd_119',
    title: '单肩包',
    startTime: 1567526400,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_45af5k9k8aka456d1b7j2ael339c4_200x200.png',
    _material_start_time: 1567526400,
    sort: 5,
    endTime: 0,
    _system_record_entry_id: '570244'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=50661&title=旅行箱&acm=3.mce.1_10_1og20.600.0.5KcplusdsE6wg.pos_874-m_570248-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1og20.600.0.5KcplusdsE6wg.pos_874-m_570248-sd_119',
    title: '旅行箱',
    startTime: 1567526400,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_7f32jc1fc02kd3725jehfbal1a094_200x200.png',
    _material_start_time: 1567526400,
    sort: 6,
    endTime: 0,
    _system_record_entry_id: '570248'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=20006214&title=手提包&acm=3.mce.1_10_1og1u.600.0.5KcplusdsE6wh.pos_875-m_570245-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1og1u.600.0.5KcplusdsE6wh.pos_875-m_570245-sd_119',
    title: '手提包',
    startTime: 1567563710,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_4cdf3hd8511j0e9h876f262ibk814_200x200.png',
    _material_start_time: 1567563710,
    sort: 7,
    endTime: 0,
    _system_record_entry_id: '570245'
  },
  {
    link: '//m.mogu.com/wall/book/bags?fcid=20006229&title=帆布包&acm=3.mce.1_10_1trdc.600.0.5KcplusdsE6wi.pos_876-m_694220-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1trdc.600.0.5KcplusdsE6wi.pos_876-m_694220-sd_119',
    title: '帆布包',
    startTime: 1569427200,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_1a90ab5g727jg4g5ek99kb4ia671l_200x200.png',
    _material_start_time: 1569427200,
    sort: 8,
    endTime: 0,
    _system_record_entry_id: '694220'
  },
  {
    link: '//m.mogu.com/wall/book/shopping?fcid=20005316&title=链条包&acm=3.mce.1_10_1trda.600.0.5KcplusdsE6wj.pos_877-m_694219-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1trda.600.0.5KcplusdsE6wj.pos_877-m_694219-sd_119',
    title: '链条包',
    startTime: 1588953600,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_19jhc1g9ee8i32ea5420j834f03ac_200x200.png',
    _material_start_time: 1588953600,
    sort: 9,
    endTime: 0,
    _system_record_entry_id: '694219'
  },
  {
    link: '//m.mogu.com/wall/book/shopping?fcid=20006311&title=39.9元精选&acm=3.mce.1_10_1trd8.600.0.5KcplusdsE6wk.pos_878-m_694218-sd_119',
    _material_end_time: 2147483647,
    acm: '3.mce.1_10_1trd8.600.0.5KcplusdsE6wk.pos_878-m_694218-sd_119',
    title: '39.9元精选',
    startTime: 1613232000,
    image: 'https://s10.mogucdn.com/mlcdn/c45406/210214_649djc427gf4ki688a2fe36ghbiad_200x200.png',
    _material_start_time: 1613232000,
    sort: 11,
    endTime: 0,
    _system_record_entry_id: '694218'
  }
]

const list = ref([...originData])

watch(
  () => props.categoryId,
  (val) => {
    console.log('categoryId has Changed! val is ', val)
    // todo
    list.value.sort(() => Math.random() - 0.5)
  }
)
</script>

<style lang="scss" scoped>
.category-detail {
  padding-left: 2rem;
}
.category-detail-inline {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  > div {
    // height: 100px;
    img {
      width: 100%;
    }
  }
}
</style>
