import { createRouter, createWebHistory } from "vue-router";
import Routed from "../components/mainPage/routedPage.vue";
import FirstPage from "../components/mainPage/firstPage.vue";
import marsImages from "../components/marsImages.vue";

const routes = [
  { path: "/routed", name: "Routed", component: Routed },
  { path: "/", name: "FirsPage", component: FirstPage },
  { path: "/marsImages", name: "marsImages", component: marsImages },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
