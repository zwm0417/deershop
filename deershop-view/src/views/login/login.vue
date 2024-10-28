<template>
  <div class="login bg-white w-full">
    <header class="flex jc-sb ai-center bg-white bb-1 h-20 px-4">
      <div class="category">
        <van-icon name="arrow-left" @click="router.go(-1)" />
      </div>

      <div class="fs-medium">登录/注册</div>

      <div class="message">
        <van-icon name="chat-o" />
      </div>
    </header>

    <div class="p-8">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="手机号"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写用户名' }]"
            clearable
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            clearable
          />
        </van-cell-group>

        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { userLogin } from '@/api/user'
import { setToken } from '@/utils/cookie'

defineOptions({
  name: 'login'
})

const router = useRouter()

const username = ref('')
const password = ref('')

async function onSubmit() {
  console.log('提交')
  const params = {
    username: username.value,
    password: password.value
  }
  console.log('params: ', params)
  const res = await userLogin(params)
  console.log('res: ', res)
  setToken(res.data.token)
  sessionStorage.setItem('user', JSON.stringify(res.data.data))
  router.replace('/my')
}
</script>

<style lang="scss" scoped>
header {
  background: rgb(255, 68, 102);
  color: white;
}
</style>
