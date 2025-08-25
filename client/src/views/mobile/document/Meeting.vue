<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/mobile/common/detail_banner.png" alt="광운대학교" />
    </div>
		<div class="meeting-wrap">
			<h2>회의록</h2>
			<ul>
				<li v-for="meeting in meetingList" v-bind:key="meeting.id">
					<a :href="meeting.file_url" target="_blank" rel="noopener noreferrer">
						{{ meeting.title }}.pdf
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

const getMeetingList = () => {
  Meeting.getMeetingList().then((res) => {
    meetingList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getMeetingList()
</script>
