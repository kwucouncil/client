<template>
  <div class="container">
    <div class="status-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'rank' }" @click="tab = 'rank'">종합 순위</div>
        <div :class="{ active: tab === 'status' }" @click="tab = 'status'">종목별 현황</div>
      </div>
      <div v-show="tab === 'rank'" class="rank-wrap">
        <div class="date">{{ updatedAt }}</div>
        <div class="card-wrap">
          <div class="card first">
            <div class="spot">1<span>위</span></div>
            <div class="team">미디어커뮤니케이션학부<span>School of Media & Communication</span></div>
            <div class="score">250점</div>
          </div>
          <div class="card second">
            <div class="spot">2<span>위</span></div>
            <div class="team">미디어커뮤니케이션학부<span>School of Media & Communication</span></div>
            <div class="score">240점</div>
          </div>
          <div class="card third">
            <div class="spot">3<span>위</span></div>
            <div class="team">미디어커뮤니케이션학부<span>School of Media & Communication</span></div>
            <div class="score">240점</div>
          </div>
          <div class="card">
            <div class="spot">4<span>위</span></div>
            <div class="team">소프트<span>software</span></div>
            <div class="score">240점</div>
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
@import "@/scss/mobile/yeonchon/status";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref } from 'vue';

const tab = ref('rank')
const rankList = ref([])
const updatedAt = ref('')

const rankClass = (r) => {
  if (r === 1) return 'first'
  if (r === 2) return 'second'
  if (r === 3) return 'third'
  return ''
}

const getRank = () => {
  Yeonchon.getRank().then((res) => {
    updatedAt.value = res.data.updated_at
    rankList.value = res.data.standings
  }).catch((err) => {
    console.log(err)
  })
};

getRank()
</script>