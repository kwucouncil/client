import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import MobileDetect from 'mobile-detect';

import LayoutW from '@/views/desktop/layout/Layout'
import LayoutM from '@/views/mobile/layout/Layout'

const w_routes = [
  {
    path: '/',
    name : 'Home',
    component: LayoutW,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('@/views/desktop/main/Main.vue'),
      },
      {
        path: '/orientation',
        name: 'orientation',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/orientation/confirm',
        children: [
          {
            path: '/orientation/confirm',
            name: 'Confirm',
            component: () => import('@/views/desktop/orientation/Confirm.vue'),
          },
        ]
      },
    ]
  },
];

const m_routes = [
  {
    path: '/',
    name : 'Home',
    component: LayoutM,
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'Main',
        component: () => import('@/views/mobile/main/Main.vue'),
      },
      {
        path: '/orientation',
        name: 'Orientation',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/orientation/confirm',
        children: [
          {
            path: '/orientation/confirm',
            name: 'Confirm',
            component: () => import('@/views/mobile/orientation/Confirm.vue'),
          },
        ]
      },
    ]
  },
];

const w_router = () => createRouter({
  history: createWebHashHistory(),
  routes: w_routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

const m_router = () => createRouter({
  history: createWebHashHistory(),
  routes: m_routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

let router;
const md = new MobileDetect(window.navigator.userAgent); //mobile-detect를 통해
if (!md.mobile()) {
  router = w_router();
  require('../scss/desktop/app.scss');
} else {
  router = m_router();
  require('../scss/mobile/app.scss');
}

export default router
