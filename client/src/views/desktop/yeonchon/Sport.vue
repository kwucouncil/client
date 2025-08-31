<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/schedule.svg" alt="경기 일정" />
    </div>
    <div class="sport-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'off' }" @click="tab = 'off'">오프라인 종목</div>
        <div :class="{ active: tab === 'on' }" @click="tab = 'on'">온라인 종목</div>
      </div>
      <div class="card-wrap">
        <div class="card" v-for="sport in filteredSports" :key="sport.id">
          <div class="top-wrap">
            <div class="logo-wrap">
              <img :src="require(`@/assets/imgs/desktop/yeonchon/icon/${sport.id}/${sport.id}_active.svg`)" alt="">
              {{ sport.title }}
            </div>
            <a target="_blank" rel="noopener" :href="sport.pdf">규칙 보기</a>
          </div>
          <div class="desc-wrap" v-html="sport.desc"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/sport";
</style>

<script setup>
import { ref, computed } from 'vue';
import footPdf from "@/assets/pdf/2025_연촌체전_FC온라인_규정집.pdf"

const tab = ref('off')

const sports = [
  {
    id: 'foot',
    mode: 'off',
    title: '풋살',
    pdf: footPdf,
    desc:
    `
      종목 소개  |  FIFA에서 공인한 실내 축구의 한 형태로, 공을 상대의 골대에 넣어 얻은 점수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  6 vs 6 (주전 6 / 후보 5) - 총 11명 등록<br/>
      진행 방식  |  예선 리그전(조별 4개의 과, 7개 조) / 본선 16강 토너먼트 / 올스타전 4강 토너먼트<br/>
      경기 방식  |  전/후반 각 20분씩, 하프타임 5분
    `
  },
]

const filteredSports = computed(() => sports.filter(s => s.mode === tab.value))
</script>