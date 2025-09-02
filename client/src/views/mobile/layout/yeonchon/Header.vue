<template>
  <header>
    <div class="header-wrap">
      <div class="logo-wrap">
        <router-link to="/yeonchon"><img src="@/assets/imgs/mobile/common/logo_p.svg" alt="광운대학교"></router-link>
      </div>
    </div>
    <div class="menu-wrap">
      <ul>
        <li
          v-for="item in navItems"
          :key="item.key"
          :class="[item.key, { active: isActive(item) }]"
          @click="toDetail(item.key)"
        >
        <div class="icon"></div>
        <div class="title">{{ item.label }}</div>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/mobile/layout/yeonchon/header";
</style>

<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()

const navItems = [
  { id: 1, key: 'home',  label: '홈' },
  { id: 2, key: 'schedule',  label: '일정' },
  { id: 3, key: 'status',  label: '현황' },
  { id: 4, key: 'sport',  label: '종목 및 팀' },
  { id: 5, key: 'event',  label: '승부예측' },
]

const toDetail = (key) => {
  router.push(key === 'home' ? '/yeonchon' : `/yeonchon/${key}`);
}

const isActive = (item) => {
  if (item.key === 'home') return route.path === '/yeonchon'
  return route.path.startsWith(`/yeonchon/${item.key}`)
}
</script>