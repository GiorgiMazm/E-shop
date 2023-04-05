import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Pages/HomePage/HomePage.vue";
import ProductPage from "../components/Pages/ProductPage/ProductPage.vue";
import BagPage from "../components/Pages/BagPage/BagPage.vue";
import ProductItemPage from "../components/Pages/ProductPage/ProductItemPage.vue";

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

  {
    path: "/productItem",
    component: ProductItemPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
