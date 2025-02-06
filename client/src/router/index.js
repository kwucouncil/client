import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import Confirm from '../views/orientation/Confirm.vue';
// import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', component: Main },
  { path: '/confirm', component: Confirm },
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
