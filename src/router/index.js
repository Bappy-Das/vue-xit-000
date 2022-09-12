import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/registration/Register.vue";
// import Register from "../components/registration/timeline.vue";
import login from "../components/login/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: login,
    },
    {
      path: "/dashboard",
      component: () => import("../components/dashboard/Dashboard.vue"),
    },

    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/register",
      component: Register,
    },
  ],
});

export default router;
