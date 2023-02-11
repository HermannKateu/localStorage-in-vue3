import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";

export const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../views/SignUpPage.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/holiday-list",
    name: "holiday-list",
    component: () => import("../views/HolidayList.vue"),
  },
  {
    path: "/create-holiday",
    name: "create-holiday",
    component: () => import("../views/CreateHolidayForm.vue"),
  },
  {
    path: "/holiday-item/:id",
    name: "holiday-details",
    component: () => import("../views/HolidaysItem.vue"),
  },
  {
    path: "/empty-holiday",
    name: "empty-holiday",
    component: () => import("../views/UncreatedHolidayPage.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
