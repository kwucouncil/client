<template>
  <header>
    <div class="header-wrap">
      <div class="logo-wrap">
        <router-link to="/"><img src="@/assets/imgs/desktop/common/logo.svg" alt="광운대학교"></router-link>
      </div>
      <div class="menu-wrap">
        <ul>
          <li @click="showAlert"><router-link to="/about" >총학생회</router-link></li>
          <li @click="showAlert"><router-link to="/orientation" >새로배움터</router-link></li>
          <!-- <li @click="showAlert"><router-link to="/" >제휴사업</router-link></li> -->
          <li @click="showAlert"><router-link to="/document" >자료실</router-link></li>
          <li @click="showAlert"><router-link to="/notice" >공지사항</router-link></li>
          <!-- <li @click="showAlert"><router-link to="/contact" >소통</router-link></li> -->
          <li @click="showAlert"><a href="https://www.kw.ac.kr/ko/" target="_blank">광운대학교</a></li>
        </ul>
      </div>
      <!-- <div class="user-wrap" v-if="is_login">
        <button @click="logout">로그아웃</button>
      </div>
      <div class="user-wrap" v-else @click="showAlert">
        <router-link to="/">로그인</router-link>
        <router-link to="/" >회원가입</router-link>
      </div> -->
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/desktop/layout/header";
</style>

<script setup>
  import { ref } from 'vue';
  // const is_login = ref(false);
</script>