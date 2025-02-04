<template>
  <div class="main">
    <div class="container">
      <section class="top-content-wrap">
        <img src="@/assets/imgs/main/university.svg" alt="광운대학교">
      </section>
      <section class="middle-content-wrap">
        <div class="banner-container">
          <SwiperBanner/>
        </div>
        <div class="confirm-wrap">
          <h2>새로배움터 신청 조회</h2>
          <router-link to="/">신청 조회하기</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/main/main";
</style>

<script setup>
import SwiperBanner from '@/views/main/component/SwiperBanner.vue'
</script>
