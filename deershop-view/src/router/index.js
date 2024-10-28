import Layout from '@/layout/layout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '首页'
          }
        },
        {
          path: '/shopping',
          name: 'shopping',
          component: () => import('@/views/shopping.vue'),
          meta: {
            title: '商城'
          }
        },
        {
          path: '/live',
          name: 'live',
          component: () => import('@/views/live.vue'),
          meta: {
            title: '直播'
          }
        },
        {
          path: '/my',
          name: 'my',
          component: () => import('../views/my.vue'),
          meta: {
            title: '我的'
          }
        }
      ]
    },
    {
      path: '/search',
      component: () => import('@/views/search/search.vue'),
      children: [
        {
          path: '',
          name: 'search',
          component: () => import('@/views/search/searchIndex.vue'),
          meta: {
            title: '搜索'
          }
        },
        {
          path: 'result',
          name: 'searchResult',
          component: () => import('@/views/search/searchResult.vue'),
          meta: {
            title: '搜索结果'
          }
        }
      ]
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/category/category.vue'),
      meta: {
        title: '分类'
      }
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: () => import('@/views/goodsDetail/goodsDetail.vue'),
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        title: '登录页'
      }
    }
  ]
})

export default router
