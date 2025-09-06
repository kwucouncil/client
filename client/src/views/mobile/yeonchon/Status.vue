<template>
  <div class="container">
    <div class="status-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'rank' }" @click="tab = 'rank'">종합 순위</div>
        <div :class="{ active: tab === 'status' }" @click="tab = 'status'">종목별 현황</div>
      </div>
      <div v-show="tab === 'rank'" class="rank-wrap">
        <div class="date">{{ updatedAt }}</div>
        <div class="card-wrap" v-if="rankList.length">
          <div
            v-for="item, i in rankList"
            :key="i"
            :class="['card', rankClass(item.rank)]"
          >
            <div class="spot">
              {{ item.rank }}<span>위</span>
            </div>
            <div class="team">
              {{ item.name }}<span>{{ item.name_eng }}</span>
            </div>
            <div class="score">{{ item.score }}점</div>
          </div>
        </div>
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