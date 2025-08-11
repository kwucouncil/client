<template>
  <div class="container">
    <div class="banner-wrap">
      <img src="@/assets/imgs/desktop/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="document-wrap">
      <div class="tab-wrap">
        <div class="title-wrap">자료실</div>
        <ul>
          <li :class="{ active: tab === 'Meeting' }" @click="tab = 'Meeting'">회의록</li>
        </ul>
      </div>
      <div class="content-wrap">
        <component :is="current" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/document/document";
</style>

<script setup>
import { ref, computed  } from 'vue';
import Meeting from '@/views/desktop/document/component/Meeting.vue'

const tab = ref('Meeting') // 문자열로 상태 관리
const components = { Meeting }
const current = computed(() => components[tab.value])
</script>

