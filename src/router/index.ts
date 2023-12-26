import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tron",
  },
  {
    path: "/tron",
    name: "Tron",
    redirect: "/tron/tokens",
    component: () => import("../pages/DashboardComponent.vue"),
    children: [
      {
        path: "/tron/tokens",
        name: "Tron Tokens",
        component: () => import("../pages/tron/TronTokens.vue"),
      },
      {
        path: "/tron/contracts",
        name: "Tron Contracts",
        component: () => import("../pages/tron/TronContracts.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
