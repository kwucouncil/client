<template>
  <div class="container">
    <div class="banner-wrap">
      <img src="@/assets/imgs/desktop/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="about-wrap">
      <div class="tab-wrap">
        <div class="title-wrap">총학생회</div>
        <ul>
          <li :class="{ active: tab === 'Greeting' }" @click="tab = 'Greeting'">소개 및 인사말</li>
          <li :class="{ active: tab === 'Organization' }" @click="tab = 'Organization'">조직도</li>
          <!-- <li :class="{ active: tab === 'Work' }" @click="tab = 'Work'">국별업무</li> -->
        </ul>
      </div>
      <div class="content-wrap">
        <component :is="current" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/about/about";
</style>

<script setup>
import { ref, computed  } from 'vue';
import Greeting from '@/views/desktop/about/component/Greeting.vue'
import Organization from '@/views/desktop/about/component/Organization.vue'
import Work from '@/views/desktop/about/component/Work.vue'

const tab = ref('Greeting') // 문자열로 상태 관리
const components = { Greeting, Organization, Work }
const current = computed(() => components[tab.value])
</script>

