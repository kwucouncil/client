<template>
	<div class="meeting-wrap">
		<h2>회의록</h2>
		<ul>
			<li v-for="meeting in meetingList" v-bind:key="meeting.id">
				<a :href="meeting.file_url" target="_blank" rel="noopener noreferrer">
					<span class="title">{{ meeting.title }}</span>
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

const getMeetingList = () => {
  Meeting.getMeetingList().then((res) => {
    meetingList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getMeetingList()
</script>
