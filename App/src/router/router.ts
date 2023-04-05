import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ProductPage from "../components/ProductPage.vue";
import BagPage from "../components/BagPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/products",
    component: ProductPage,
  },

  {
    path: "/bag",
    component: BagPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
