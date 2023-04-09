import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/Pages/Home/HomePage.vue";
import ProductPage from "../components/Pages/Product/ProductPage.vue";
import BagPage from "../components/Pages/Bag/BagPage.vue";
import ProductItemPage from "../components/Pages/Product/ProductItemPage.vue";
import SignInPage from "../components/Pages/Login/SignInPage.vue";
import SignUpPage from "../components/Pages/Login/SignUpPage.vue";

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
    path: "/signin",
    component: SignInPage,
  },
  {
    path: "/signup",
    component: SignUpPage,
  },

  {
    path: "/product/:id",
    component: ProductItemPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
