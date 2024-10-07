import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: false,
  timeout: 30 * 1000
})

// 请求拦截器
// request interceptor
service.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data || response
  },
  (error) => {
    // 无权限
    console.error(error)
    return Promise.reject(error)
  }
)

export default service
