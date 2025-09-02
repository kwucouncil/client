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
        <div class="card-wrap" v-if="rankList.length">
          <div
            v-for="item in rankList"
            :key="item.department_id"
            :class="['card', rankClass(item.rank)]"
          >
            <div class="spot">
              {{ item.rank }}<span>위</span>
            </div>
            <div class="team">
              {{ item.department_name }}<br />
              <span>{{ item.college_name }}</span>
            </div>
            <div class="score">
              <span>총점</span>{{ item.total_score }}점
            </div>
            <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="" />
          </div>
        </div>
        <div v-else class="empty">집계된 순위가 없습니다.</div>
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