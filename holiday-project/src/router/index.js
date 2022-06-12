import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import { holidayInfo } from "../data/holidayInfo";

export const routes = [
  {
    path: "/",
    component: LoginPage
  },
  {
    path: "/sign-up",
    component: () => import("../views/SignUpPage.vue")
  },
  {
    path: "/home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/holiday-list",
    component: () => import("../views/HolidayList.vue"),
  },
  {
    path: "/create-holiday",
    component: () => import("../views/CreateHolidayForm.vue")
  },
  {
    path: "/holiday-item/:id",
    component: () => import("../views/HolidaysItem.vue"),
  },    
  {
    path: "/empty-holiday",
    component: () => import("../views/UncreatedHolidayPage.vue"),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
