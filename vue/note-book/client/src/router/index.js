import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/noteClass'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'), // 路由懒加载,通过箭头函数返回一个promise对象
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteclass',
    component: () => import('../views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/notelist',
    name: 'notelist',
    component: () => import('../views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
      path: '/noteDetail',
      name: 'noteDetail',
      component: () => import('../views/NoteDetail.vue')
  },
  {
    path: '/notePublish',
    name: 'notePublish',
    component: () => import('../views/NotePublish.vue'),
    meta: {
      title: '发布笔记'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由守卫
const whitePath = ['/login', '/register'];
router.beforeEach((to, from, next) => {

  console.log(to, from);
  document.title  = to.meta.title
  if (!whitePath.includes(to.path)) {
    // 看本地存储有没有值
    if (!localStorage.getItem('userInfo')) {
      router.push('/login')
      return
    }
  }
  next()
})

export default router