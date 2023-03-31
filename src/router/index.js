import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "../views/MapView.vue";
import ImageView from "../views/ImageView.vue";
import ContactView from "../views/ContactView.vue";
import PricesView from "../views/PricesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/images",
      name: "images",
      component: ImageView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/prices",
      name: "prices",
      component: PricesView,
    },
  ],
});

export default router;
