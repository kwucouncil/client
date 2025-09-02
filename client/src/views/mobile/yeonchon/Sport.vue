<template>
  <div class="container">
    <div class="sport-team-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'sport' }" @click="tab = 'sport'">경기 종목</div>
        <div :class="{ active: tab === 'team' }" @click="tab = 'team'">참여 팀</div>
      </div>
      <div v-show="tab === 'sport'" class="sport-wrap">
        <div class="card-wrap">
          <h2>오프라인</h2>
          <div class="card" v-for="off in offlineSport" :key="off.id">
            <img :src="require(`@/assets/imgs/desktop/yeonchon/icon/${off.id}/${off.id}_active.svg`)" alt="">
            <div class="title">{{ off.title }}</div>
            <a :href="off.pdf" download="">규정집 다운로드</a>
          </div>
        </div>
        <div class="card-wrap">
          <h2>온라인</h2>
          <div class="card" v-for="on in onlineSport" :key="on.id">
            <img :src="require(`@/assets/imgs/desktop/yeonchon/icon/${on.id}/${on.id}_active.svg`)" alt="">
            <div class="title">{{ on.title }}</div>
            <a :href="on.pdf" download="">규정집 다운로드</a>
          </div>
        </div>
      </div>
      <div v-show="tab === 'team'" class="team-wrap">
        <div class="card-wrap" v-for="college in collegeList" :key="college.id">
          <h2>{{ college.name }}</h2>
          <div class="dep-wrap">
            <div class="dep" v-for="dep in deparmentsList.filter(d => d.college_id === college.id)" :key="dep.id">
              <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              <div class="title">{{ dep.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/yeonchon/sport";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref } from 'vue';
import footPdf from "@/assets/pdf/2025_연촌체전_풋살_규정집.pdf"
import baskPdf from "@/assets/pdf/2025_연촌체전_농구_규정집.pdf"
import dodgPdf from "@/assets/pdf/2025_연촌체전_피구_규정집.pdf"
import towPdf from "@/assets/pdf/2025_연촌체전_줄다리기_규정집.pdf"
import jokuPdf from "@/assets/pdf/2025_연촌체전_족구_규정집.pdf"
import pingPdf from "@/assets/pdf/2025_연촌체전_탁구_규정집.pdf"
import lolPdf from "@/assets/pdf/2025_연촌체전_리그오브레전드_규정집.pdf"
import fcPdf from "@/assets/pdf/2025_연촌체전_FC온라인_규정집.pdf"

const tab = ref('sport')

const offlineSport = [
  {
    id: 'foot',
    title: '풋살',
    pdf: footPdf
  },
  {
    id: 'bask',
    title: '농구',
    pdf: baskPdf
  },
  {
    id: 'dodg',
    title: '피구',
    pdf: dodgPdf
  },
    {
    id: 'tow',
    title: '줄다리기',
    pdf: towPdf
  },
  {
    id: 'joku',
    title: '족구',
    pdf: jokuPdf,
  },
  {
    id: 'ping',
    title: '탁구',
    pdf: pingPdf
  }
];

const onlineSport = [
  {
    id: 'lol',
    title: 'LOL',
    pdf: lolPdf
  },
  {
    id: 'fc',
    title: 'FC 온라인',
    pdf: fcPdf
  },
];

const collegeList = ref([])
const deparmentsList = ref([])

const getColleges = () => {
  Yeonchon.getColleges().then((res) => {
    collegeList.value = res.data.colleges
  }).catch((err) => {
    console.log(err)
  })
};

const getDeparments = () => {
  Yeonchon.getDeparments().then((res) => {
    deparmentsList.value = res.data.departments
  }).catch((err) => {
    console.log(err)
  })
};

getColleges()
getDeparments()
</script>