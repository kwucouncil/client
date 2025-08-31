<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/status.svg" alt="경기 일정" />
    </div>
    <div class="status-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'rank' }" @click="tab = 'rank'">종합 순위</div>
        <div :class="{ active: tab === 'status' }" @click="tab = 'status'">종목별 현황</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/status";
</style>

<script setup>
import { ref, computed } from 'vue';

const tab = ref('rank')
</script>