<template>
  <header>
    <div class="header-wrap">
      <button @click="ClickMenu" class="btn-menu"></button>
      <div class="logo-wrap">
        <router-link to="/"><img src="@/assets/imgs/mobile/common/logo.svg" alt="광운대학교"></router-link>
      </div>
      <div class="menu-detail" v-if="isMenu">
        <div class="title-wrap">
          <h3>광운대학교 제52대<br/>총학생회 비상대책위원회</h3>
          <button @click="ClickMenu" class="btn-close"></button>
        </div>
        <ul class="menu-navigation">
          <li class="menu">
            <div class="menu-down" :class="[menu === 'about' ? 'down' : 'up']" @click="ClickMenuDetail('about')">총학생회</div>
            <ul v-if="menu === 'about'">
              <li><router-link to="/about/greeting" @click="isMenu = false">소개 및 인사말</router-link></li>
              <li><router-link to="/about/organization" @click="isMenu = false">조직도</router-link></li>
              <li><router-link to="/about/info" @click="isMenu = false">연락처</router-link></li>
              <li><router-link to="/about/guide" @click="isMenu = false">오시는 길</router-link></li>
            </ul>
          </li>
          <!-- <li class="menu"><a href="/#/yeonchon" target="_blank" class="menu-down">연촌체전</a></li> -->
          <li class="menu">
            <div class="menu-down" :class="[menu === 'document' ? 'down' : 'up']" @click="ClickMenuDetail('document')">자료실</div>
            <ul v-if="menu === 'document'">
              <li><router-link to="/document/meeting" @click="isMenu = false">회의록</router-link></li>
            </ul>
          </li>
          <li class="menu">
            <router-link to="/notice" class="menu-down" @click="isMenu = false">공지사항</router-link>
          </li>
          <li class="menu">
            <router-link to="/orientation/confirm" class="menu-down" @click="isMenu = false">새로배움터</router-link>
          </li>
          <li class="menu"><a href="https://www.kw.ac.kr/ko/" target="_blank" class="menu-down">광운대학교</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/mobile/layout/basic/header";
</style>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const isMenu = ref(false)
const menu = ref('')
const route = useRoute();

const ClickMenu = () => {
  isMenu.value = !isMenu.value
}

const ClickMenuDetail = (value) => {
  if(menu.value === value) {
    menu.value = ''
  } else {
    menu.value = value
  }
}

const setMenuByRoute = () => {
  const path = route.path;
  if (path.startsWith("/about")) {
    menu.value = "about";
  } else if (path.startsWith("/document")) {
    menu.value = "document";
  } else {
    menu.value = "";
  }
};

onMounted(() => {
  setMenuByRoute();
});

watch(
  () => route.path,
  () => {
    setMenuByRoute();
  }
);
</script>