import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from "vue-router";
import HomePage from "../components/Pages/Home/HomePage.vue";
import ProductPage from "../components/Pages/Product/ProductPage.vue";
import BagPage from "../components/Pages/Bag/BagPage.vue";
import ProductItemPage from "../components/Pages/Product/ProductItemPage.vue";
import SignInPage from "../components/Pages/Login/SignInPage.vue";
import SignUpPage from "../components/Pages/Login/SignUpPage.vue";
import { useProductStore } from "../stores/ProductStore";
import EditProductPage from "../components/Pages/Product/EditProductPage.vue";
import UserPage from "../components/Pages/User/UserPage.vue";
import UserListPage from "../components/Pages/User/UserListPage.vue";
import CheckoutPage from "../components/Pages/Checkout/CheckoutPage.vue";

const ifNotAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useProductStore();
  if (!store.userModule.getCurrentUser) next();
  else next("/");
};

const ifAuth = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useProductStore();
  if (store.userModule.getCurrentUser) next();
  else next("/signin");
};

const ifAdmin = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const store = useProductStore();
  if (store.userModule.getCurrentUser?.admin) next();
  else next("/");
};
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
    beforeEnter: ifAuth,
  },

  {
    path: "/checkout",
    component: CheckoutPage,
  },
  {
    path: "/signin",
    component: SignInPage,
    beforeEnter: ifNotAuth,
  },
  {
    path: "/signup",
    component: SignUpPage,
    beforeEnter: ifNotAuth,
  },

  {
    path: "/product/:id",
    component: ProductItemPage,
  },

  {
    path: "/product/edit/:id",
    component: EditProductPage,
    beforeEnter: ifAdmin,
  },

  {
    path: "/user/:id",
    component: UserPage,
    beforeEnter: ifAuth,
  },

  {
    path: "/userList",
    component: UserListPage,
    beforeEnter: ifAdmin,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
