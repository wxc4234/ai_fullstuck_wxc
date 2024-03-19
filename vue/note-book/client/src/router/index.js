import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/noteclass',
    component: () => import('../views/NoteClass.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router