import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import ProductsIndex from "../views/ProductsIndex.vue";
import ProductsNew from "../views/ProductsNew.vue";
import ProductsShow from "../views/ProductsShow.vue";
import ProductsEdit from "../views/ProductsEdit.vue";
import CartedProducts from "../views/CartedProducts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/products", name: "Products-index", component: ProductsIndex },
  { path: "/products/new", name: "products-new", component: ProductsNew },
  { path: "/products/:id", name: "products-show", component: ProductsShow },
  { path: "/products/:id/edit", name: "products-edit", component: ProductsEdit },
  { path: "/cartedProducts", name: "carted-products", component: CartedProducts },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
