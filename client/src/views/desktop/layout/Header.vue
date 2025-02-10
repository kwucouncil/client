<template>
  <header>
    <div class="header-wrap">
      <div class="logo-wrap">
        <router-link to="/"><img src="@/assets/imgs/desktop/common/logo.svg" alt="광운대학교"></router-link>
      </div>
      <div class="menu-wrap">
        <ul>
          <li @click="showAlert"><router-link to="/" >공지사항</router-link></li>
          <li @click="showAlert"><router-link to="/" >활동정보</router-link></li>
          <li @click="showAlert"><router-link to="/" >제휴사업</router-link></li>
          <li @click="showAlert"><router-link to="/" >문의사항</router-link></li>
        </ul>
      </div>
      <div class="user-wrap" v-if="is_login">
        <button @click="logout">로그아웃</button>
      </div>
      <div class="user-wrap" v-else @click="showAlert">
        <router-link to="/">로그인</router-link>
        <router-link to="/" >회원가입</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/desktop/layout/header";
</style>

<script setup>
  import { ref } from 'vue';
  const is_login = ref(false);

  const showAlert = () => {
    alert('서비스 준비 중입니다.')
  }
</script>