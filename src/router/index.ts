import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/notification",
    name: "notification",
    component: () => import("../views/NotificationView.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("../views/MessagesView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/SettingVue.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LogInView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
