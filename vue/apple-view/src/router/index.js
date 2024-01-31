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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router