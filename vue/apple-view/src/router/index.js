import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/diversion',
    name: 'diversion',
    component: () => import('@/views/Diversion.vue'),
  },
  {
    path: '/cultivate',
    name: 'cultivate',
    component: () => import('@/views/Cultivate.vue'),
  },
  {
    path: '/commercial',
    name: 'commercial',
    component: () => import('@/views/Commercial.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/synopsis',
    name: 'synopsis',
    component: () => import('@/views/Synopsis.vue'),
  },
  {
    path: '/baseneed',
    name: 'baseneed',
    component: () => import('@/views/Baseneed.vue'),
  },
  {
    path: '/prereve',
    name: 'prereve',
    component: () => import('@/views/Prereve.vue'),
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('@/views/Price.vue'),
  },
  {
    path: '/nextgood',
    name: 'nextgood',
    component: () => import('@/views/Nextgood.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // process.env.BASE_URL是vue-cli中的全局变量，对应publicPath
  routes
})

export default router