<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/sport.svg" alt="경기 종목" />
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
import footPdf from "@/assets/pdf/2025_연촌체전_풋살_규정집.pdf"
import baskPdf from "@/assets/pdf/2025_연촌체전_농구_규정집.pdf"
import dodgPdf from "@/assets/pdf/2025_연촌체전_피구_규정집.pdf"
import towPdf from "@/assets/pdf/2025_연촌체전_줄다리기_규정집.pdf"
import jokuPdf from "@/assets/pdf/2025_연촌체전_족구_규정집.pdf"
import pingPdf from "@/assets/pdf/2025_연촌체전_탁구_규정집.pdf"
import lolPdf from "@/assets/pdf/2025_연촌체전_리그오브레전드_규정집.pdf"
import fcPdf from "@/assets/pdf/2025_연촌체전_FC온라인_규정집.pdf"

const tab = ref('off')

const sports = [
  {
    id: 'foot',
    mode: 'off',
    title: '풋살',
    pdf: footPdf,
    desc: `
      종목 소개  |  FIFA에서 공인한 실내 축구의 한 형태로, 공을 상대의 골대에 넣어 얻은 점수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  6 vs 6 (주전 6 / 후보 5) - 총 11명 등록<br/>
      진행 방식  |  예선 리그전(조별 4~5개의 과, 7개 조) / 본선 16강 토너먼트 / 올스타전 단판<br/>
      경기 방식  |  전/후반 각 20분씩, 하프타임 5분
    `
  },
  {
    id: 'bask',
    mode: 'off',
    title: '농구',
    pdf: baskPdf,
    desc: `
      종목 소개  |  공을 링에 넣어 얻은 점수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  5 vs 5 (주전 5 / 후보 6) - 총 11명 등록<br/>
      진행 방식  |  29강 토너먼트 / 올스타전 단판<br/>
      경기 방식  |  4쿼터(한 쿼터당 8분), 쉬는 시간 2분(단, 2쿼터 종료 시 4분)
    `
  },
  {
    id: 'dodg',
    mode: 'off',
    title: '피구',
    pdf: dodgPdf,
    desc: `
      종목 소개  |  일정한 구역 내에서 상대에게 공을 맞혀 아웃시킨 인원수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  7 vs 7 (주전 7 / 후보 3) - 총 10명 등록, 여성 제한<br/>
      진행 방식  |  29강 토너먼트<br/>
      경기 방식  |  4강 이전 - 3판 2선승제, 4강 & 결승전 - 5판 3선승제
    `
  },
    {
    id: 'tow',
    mode: 'off',
    title: '줄다리기',
    pdf: towPdf,
    desc: `
      종목 소개  |  두 팀이 줄을 잡고 마주 서서, 협동을 통해 상대를 특정 지점까지 끌어와 승리하는 단체 스포츠<br/>
      경기 인원  |  10 vs 10 (남성 7 / 여성 3) + 후보 3<br/>
      진행 방식  |  29강 토너먼트<br/>
      경기 방식  |  8강전까지 - 3판 2선승제, 4강전 - 5판 3선승제, 결승전 - 7판 4선승제
    `
  },
  {
    id: 'joku',
    mode: 'off',
    title: '족구',
    pdf: jokuPdf,
    desc: `
      종목 소개  |  경기장 중앙에 설치된 네트를 기준으로 공을 상대방 진영에 발로 차 넘겨 얻은 점수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  4 vs 4 (주전 4 / 후보 4) - 총 8명 등록<br/>
      진행 방식  |  29강 토너먼트<br/>
      경기 방식  |  모든 경기 3판 2선승제 (세트당 20분 제한), 쉬는 시간 2분
    `
  },
  {
    id: 'ping',
    mode: 'off',
    title: '탁구',
    pdf: pingPdf,
    desc: `
      종목 소개  |  탁자 중앙에 네트를 걸고 채를 이용해 공을 상대팀에게 넘겨 얻은 점수의 우열을 통해 승패를 가리는 구기 종목<br/>
      경기 인원  |  2 vs 2 복식 (주전 2 / 후보 1) - 총 3명 등록<br/>
      진행 방식  |  29강 토너먼트, 복식<br/>
      경기 방식  |  4강 이전 - 3판 2선승제, 4강 & 결승전 - 5판 3선승제
    `
  },
  {
    id: 'lol',
    mode: 'on',
    title: 'LOL',
    pdf: lolPdf,
    desc: `
      종목 소개  |  서로 다른 포지션에서 성장을 통해 아이템과 레벨을 올려 상대의 기지를 파괴하는 AOS 장르의 게임<br/>
      경기 인원  |  5 vs 5 (주전 5 / 후보 1) - 총 6명 등록<br/>
      진행 방식  |  29강 토너먼트, 하드 피어리스 드래프트<br/>
      경기 방식  |  4강 이전 - 단판, 4강 - 3판 2선승제, 결승전 - 5판 4선승제
    `
  },
  {
    id: 'fc',
    mode: 'on',
    title: 'FC 온라인',
    pdf: fcPdf,
    desc: `
      종목 소개  |  EA KOREA STUDIO에서 개발하여 넥슨에서 배급하는 대표적인 축구 온라인 비디오 게임<br/>
      경기 인원  |  3 vs 3 (주전 3 / 후보 1) - 총 4명 등록<br/>
      진행 방식  |  29강 토너먼트<br/>
      경기 방식  |  8강전까지 - 3판 2선승제 / 4강전부터 - 5판 3선승제
    `
  },
];

const filteredSports = computed(() => sports.filter(s => s.mode === tab.value))
</script>