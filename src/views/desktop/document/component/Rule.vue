<template>
	<div class="meeting-wrap">
		<h2>회칙 및 예하 세칙</h2>
		<ul>
			<!-- <li v-for="meeting in meetingList" v-bind:key="meeting.id">
				<a :href="meeting.file_url" target="_blank" rel="noopener noreferrer">
					<span class="title">{{ meeting.title }}</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li> -->
			<li>
				<a :href="test1" target="_blank" rel="noopener noreferrer">
					<span class="title">광운대학교 총학생회칙</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li>
			<li>
				<a :href="test2" target="_blank" rel="noopener noreferrer">
					<span class="title">광운대학교 중앙선거시행세칙</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li>
			<li>
				<a :href="test3" target="_blank" rel="noopener noreferrer">
					<span class="title">광운대학교 예결산감사시행세칙</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li>
			<li>
				<a :href="test4" target="_blank" rel="noopener noreferrer">
					<span class="title">광운대학교 중앙선거시행세칙 일부개정안 신•구조문 대비표</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li>
			<li>
				<a :href="test5" target="_blank" rel="noopener noreferrer">
					<span class="title">(구)광운대학교 중앙선거시행세칙</span>
					<span class="btn-pdf">PDF</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/document/meeting";
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
