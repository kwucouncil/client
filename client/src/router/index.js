import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import MobileDetect from 'mobile-detect';

import LayoutW from '@/views/desktop/layout/basic/Layout'
import YeonChonW from '@/views/desktop/layout/yeonchon/Layout'

import LayoutM from '@/views/mobile/layout/basic/Layout'
// import YeonChonM from '@/views/mobile/layout/yeonchon/Layout'

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
            name: 'OrientationConfirm',
            component: () => import('@/views/desktop/orientation/Confirm.vue'),
          },
        ]
      },
      {
        path: '/about',
        name: 'about',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/about',
        children: [
          {
            path: '/about',
            name: 'About',
            component: () => import('@/views/desktop/about/About.vue'),
          },
        ]
      },
      {
        path: '/notice',
        name: 'notice',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notice',
        children: [
          {
            path: '/notice',
            name: 'Notice',
            component: () => import('@/views/desktop/notice/Notice.vue'),
          },
          {
            path: '/notice/:id',
            name: 'NoticeDetail',
            component: () => import('@/views/desktop/notice/NoticeDetail.vue'),
          },
        ]
      },
      {
        path: '/document',
        name: 'document',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/document',
        children: [
          {
            path: '/document',
            name: 'Document',
            component: () => import('@/views/desktop/document/Document.vue'),
          },
        ]
      },
    ]
  },
  {
    path: '/yeonchon',
    name: 'yeonchon',
    component: YeonChonW,
    redirect: '/yeonchon',
    children: [
      {
        path: '/yeonchon',
        name: 'YeonchonMain',
        component: () => import('@/views/desktop/yeonchon/Main.vue'),
      },
      {
        path: '/yeonchon/schedule',
        name: 'YeonchonSchedule',
        component: () => import('@/views/desktop/yeonchon/Schedule.vue'),
      },
      {
        path: '/yeonchon/sport',
        name: 'YeonchonSort',
        component: () => import('@/views/desktop/yeonchon/Sport.vue'),
      },
      {
        path: '/yeonchon/status',
        name: 'YeonchonStatus',
        component: () => import('@/views/desktop/yeonchon/Status.vue'),
      },
      {
        path: '/yeonchon/team',
        name: 'YeonchonTeam',
        component: () => import('@/views/desktop/yeonchon/Team.vue'),
      },
      {
        path: '/yeonchon/event',
        name: 'YeonchonEvent',
        component: () => import('@/views/desktop/yeonchon/Event.vue'),
      },
    ]
  }
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
      {
        path: '/about',
        name: 'about',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/about/greeting',
        children: [
          {
            path: '/about/greeting',
            name: 'About',
            component: () => import('@/views/mobile/about/Greeting.vue'),
          },
          {
            path: '/about/organization',
            name: 'Organization',
            component: () => import('@/views/mobile/about/Organization.vue'),
          },
          {
            path: '/about/info',
            name: 'Info',
            component: () => import('@/views/mobile/about/Info.vue'),
          },
          {
            path: '/about/guide',
            name: 'Guide',
            component: () => import('@/views/mobile/about/Guide.vue'),
          },
        ]
      },
      {
        path: '/notice',
        name: 'notice',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notice',
        children: [
          {
            path: '/notice',
            name: 'Notice',
            component: () => import('@/views/mobile/notice/Notice.vue'),
          },
          {
            path: '/notice/:id',
            name: 'NoticeDetail',
            component: () => import('@/views/mobile/notice/NoticeDetail.vue'),
          },
        ]
      },
      {
        path: '/document',
        name: 'document',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/document/meeting',
        children: [
          {
            path: '/document/meeting',
            name: 'Meeting',
            component: () => import('@/views/mobile/document/Meeting.vue'),
          },
        ]
      }
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
