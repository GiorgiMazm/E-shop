import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Pages/HomePage/HomePage.vue";
import ProductPage from "../components/Pages/ProductPage/ProductPage.vue";
import BagPage from "../components/Pages/BagPage/BagPage.vue";

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
