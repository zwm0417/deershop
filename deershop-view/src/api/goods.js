import request from '@/utils/request'

/**
 * 获取搜索结果
 * @returns
 */
export function getGoodList(params) {
  return request({
    url: '/goods/list',
    method: 'get',
    params
  })
}
