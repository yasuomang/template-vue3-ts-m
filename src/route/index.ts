import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/test",
    },
    {
      path: "/test",
      component: () => import("@/pages/test/Test.vue"),
    },
  ],
});

export default router;
