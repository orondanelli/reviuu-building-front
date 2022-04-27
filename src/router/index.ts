import { createRouter, createWebHistory } from "vue-router";
import Devices from "@/views/Devices.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/devices",
      name: "devices",
      component: Devices,
    },
    {
      path: "/buildings",
      name: "buildings",
      components: {
        default: () => import("@/views/Buildings.vue"),
      },
    },
  ],
});

export default router;
