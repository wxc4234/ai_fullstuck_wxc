// import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "./myRouter";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;