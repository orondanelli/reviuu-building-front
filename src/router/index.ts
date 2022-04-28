import { createRouter, createWebHistory } from "vue-router";

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
      component: () => import("@/views/Devices.vue"),
      meta: { layout: "Devices" },
    },
    {
      path: "/buildings",
      name: "buildings",
      components: {
        default: () => import("@/views/Buildings.vue"),
      },
      meta: { layout: "Buildings" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.name?.toString()}`);
  next();
});

export default router;
