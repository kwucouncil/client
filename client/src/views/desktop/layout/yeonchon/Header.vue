<template>
  <header>
    <div class="header-wrap">
      <div class="logo-wrap">
        <router-link to="/yeonchon"><img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="광운대학교"></router-link>
      </div>
      <div class="menu-wrap">
        <ul>
          <li><router-link to="/yeonchon/schedule">경기 일정</router-link></li>
          <li><router-link to="/yeonchon/status">경기 현황</router-link></li>
          <li><router-link to="/yeonchon/sport">경기 종목</router-link></li>
          <li><router-link to="/yeonchon/team">Teams</router-link></li>
          <li><router-link to="/yeonchon/event">승부 예측</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/desktop/layout/yeonchon/header";
</style>

<script setup>
</script>