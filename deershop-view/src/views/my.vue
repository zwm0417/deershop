<template>
  <div>
    <div class="user-info bg-white mt-30 mx-10 flex">
      <div class="user-avatar">
        <img src="@/assets/imgs/goods_2.webp" alt="" />
      </div>
      <div class="p-4" v-if="userInfo && userInfo.username">
        <p>{{ userInfo.nickName }}</p>
        <p class="mt-4 fs-base text-danger" @click="logout">登出</p>
      </div>
      <div v-else class="flex-center flex-1">
        <p class="fs-large text-danger" @click="router.push('/login')">请登录/注册</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getToken, setToken } from '@/utils/cookie'

const router = useRouter()

const userInfo = ref({})

function logout() {
  userInfo.value = {}
  sessionStorage.setItem('user', null)
  setToken('')
  tellIsLogin()
}

function tellIsLogin() {
  if (!getToken()) {
    showNotify({
      type: 'primary',
      message: '暂未登录，3s后跳转至登录页',
      duration: 3000
    })
    // timer = setTimeout(() => {
    //   router.push('/login')
    // }, 3000)
  } else {
    userInfo.value = JSON.parse(sessionStorage.getItem('user'))
    console.log('userInfo.value: ', userInfo.value)
  }
}

let timer = null
onMounted(() => {
  tellIsLogin()
})
onBeforeUnmount(() => {
  closeNotify()
  clearTimeout(timer)
})
</script>

<style lang="scss" scoped>
.user-info {
  border-radius: 20px;
  .user-avatar {
    overflow: hidden;
    padding: 10px;
    img {
      width: 80px;
      height: 80px;
      border: var(--el-border);
      border-radius: 50%;
    }
  }
}
</style>
