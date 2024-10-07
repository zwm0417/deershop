import request from '@/utils/request'

/**
 * 获取首页分类
 * @returns
 */
export function getHomeCategory() {
  return request({
    url: '/home/category',
    method: 'get'
  })
}

/**
 * 获取首页物品
 * @returns
 */
export function getHomeGoods() {
  return request({
    url: '/home/goods',
    method: 'get'
  })
}

/**
 * 获取搜索热词
 * @returns
 */
export function getHotWords() {
  return request({
    url: '/home/hotWords',
    method: 'get'
  })
}
