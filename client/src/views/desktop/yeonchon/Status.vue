<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/status.svg" alt="경기 현황" />
    </div>
    <div class="status-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'rank' }" @click="tab = 'rank'">종합 순위</div>
        <div :class="{ active: tab === 'status' }" @click="tab = 'status'">종목별 현황</div>
      </div>
      <div v-show="tab === 'rank'" class="rank-wrap">
        <div class="date">24년 10월 23일 오후 10시 기준</div>
        <div class="card-wrap">
          <div class="card first">
            <div class="spot">1<span>위</span></div>
            <div class="team">미디어커뮤니케이션학부<br/><span>School of Media & Communication</span></div>
            <div class="score"><span>총점</span>250점</div>
            <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
          </div>
          <div class="card second">
            <div class="spot">2<span>위</span></div>
            <div class="team">전자통신공학과<br/><span>Electronics and Communications Engineering</span></div>
            <div class="score"><span>총점</span>240점</div>
            <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
          </div>
          <div class="card third">
            <div class="spot">3<span>위</span></div>
            <div class="team">법학부<br/><span>row</span></div>
            <div class="score"><span>총점</span>240점</div>
            <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
          </div>
          <div class="card">
            <div class="spot">4<span>위</span></div>
            <div class="team">환경공학과<br/>Environmental Engineering</div>
            <div class="score"><span>총점</span>240점</div>
            <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
          </div>
        </div>
      </div>
      <div v-show="tab === 'status'" class="sport-status-wrap">
        준비중입니다.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/status";
</style>

<script setup>
import { ref } from 'vue';

const tab = ref('rank')
</script>