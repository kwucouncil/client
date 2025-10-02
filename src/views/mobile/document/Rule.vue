<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/mobile/common/detail_banner.png" alt="광운대학교" />
    </div>
		<div class="meeting-wrap">
			<h2>회의록</h2>
			<ul>
        <li>
          <a :href="test1" target="_blank" rel="noopener noreferrer">
            광운대학교 총학생회칙.pdf
          </a>
        </li>
        <li>
          <a :href="test2" target="_blank" rel="noopener noreferrer">
            광운대학교 중앙선거시행세칙.pdf
          </a>
        </li>
        <li>
          <a :href="test3" target="_blank" rel="noopener noreferrer">
            광운대학교 예결산감사시행세칙.pdf
          </a>
        </li>
        <li>
          <a :href="test4" target="_blank" rel="noopener noreferrer">
            광운대학교 중앙선거시행세칙<br/>일부개정안 신•구조문 대비표.pdf
          </a>
        </li>
        <li>
          <a :href="test5" target="_blank" rel="noopener noreferrer">
            (구)광운대학교 중앙선거시행세칙.pdf
          </a>
        </li>
			</ul>
		</div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/document/meeting";
</style>

<script setup>
import Meeting from '@/api/document/meeting';
import { ref } from 'vue';
const meetingList = ref([])

import test1 from "@/assets/pdf/총학생회칙.pdf"
import test2 from "@/assets/pdf/중앙선거시행세칙.pdf"
import test3 from "@/assets/pdf/예결산감사시행세칙.pdf"
import test4 from "@/assets/pdf/대비표.pdf"
import test5 from "@/assets/pdf/중앙선거시행세칙(구).pdf"

const getMeetingList = () => {
  Meeting.getMeetingList().then((res) => {
    meetingList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getMeetingList()
</script>
