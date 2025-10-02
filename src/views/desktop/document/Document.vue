<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/desktop/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="document-wrap">
      <div class="tab-wrap">
        <div class="title-wrap">자료실</div>
        <!-- <ul>
          <li :class="{ active: tab === 'Meeting' }" @click="tab = 'Meeting'">회의록</li>
        </ul> -->
        <ul>
          <li :class="{ active: tab === 'Rule' }" @click="tab = 'Rule'">회칙 및 예하 세칙</li>
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
import Rule from '@/views/desktop/document/component/Rule.vue'

const tab = ref('Rule') // 문자열로 상태 관리
const components = { Meeting, Rule }
const current = computed(() => components[tab.value])
</script>

