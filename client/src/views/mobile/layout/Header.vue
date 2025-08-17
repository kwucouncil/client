<template>
  <header>
    <div class="header-wrap">
      <div class="btn-wrap">
        <button @click="ClickMenu" class="btn-menu"></button>
      </div>
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
            <div class="menu-down" :class="[menu === 'about' ? 'down' : 'up']" @click="ClickMenuDetail('intro')">소개</div>
            <ul v-if="menu === 'about'">
              <li><router-link to="/intro/cablecar" @click="isMenu = false">소개 및 인사말</router-link></li>
              <li><router-link to="/intro/monorail" @click="isMenu = false">조직도</router-link></li>
              <li><router-link to="/intro/cinema" @click="isMenu = false">시네마 360</router-link></li>
            </ul>
          </li>
          <li class="menu">
            <div class="menu-down" :class="[menu === 'orientation' ? 'down' : 'up']" @click="ClickMenuDetail('guide')">이용안내</div>
            <ul v-if="menu === 'orientation'">
              <li><router-link to="/orientation" @click="isMenu = false">운송약관</router-link></li>
            </ul>
          </li>
          <li class="menu">
            <div class="menu-down" :class="[menu === 'facility' ? 'down' : 'up']" @click="ClickMenuDetail('facility')">시설안내</div>
            <ul v-if="menu === 'facility'">
              <li><router-link to="/facility/facility" @click="isMenu = false">층별 안내</router-link></li>
              <li><router-link to="/facility/course" @click="isMenu = false">이용 코스</router-link></li>
            </ul>
          </li>
          <li class="menu">
            <div class="menu-down" :class="[menu === 'news' ? 'down' : 'up']" @click="ClickMenuDetail('news')">소식</div>
            <ul v-if="menu === 'news'">
              <li><router-link to="/news/notice" @click="isMenu = false">공지사항</router-link></li>
              <li><router-link to="/news/sns" @click="isMenu = false">SNS</router-link></li>
            </ul>
          </li>
          <li class="menu"><a href="https://tour.jecheon.go.kr/base/main/view" target="_blank" class="menu-down">주변 관광지</a></li>
          <li class="menu"><a :href="confirmLink" target="_blank" id="reserveCheck" class="menu-down">예약확인</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import "@/scss/mobile/layout/header";
</style>

<script setup>
  import { ref } from 'vue';

  const isMenu = ref(false)
  const menu = ref('')
  const confirmLink = ref("")

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
</script>