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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;