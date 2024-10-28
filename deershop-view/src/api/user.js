import request from '@/utils/request'

/**
 * 获取首页分类
 * @returns
 */
export function userLogin(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
