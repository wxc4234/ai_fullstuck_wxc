import { createRouter, createWebHistory } from "vue-router"
import Sex from "@/views/Sex.vue"

const routes = [
  {
    path: "/",
    redirect: "/sex",

  },
  {
    path: "/sex",
    name: "sex",
    component: Sex
  },
  {
    path: "/age",
    name: "age",
    component: () => import("@/views/Age.vue")
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/Address.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@/views/Message.vue")
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/Mine.vue")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/views/Detail.vue")
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;