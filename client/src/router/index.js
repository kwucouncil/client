import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/main/Main.vue';
// import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

export default router;
