<template>
	<div class="container">
		<div class="confirm-wrap">
			<div class="banner-wrap">
				<img src="@/assets/imgs/desktop/orientation/banner.svg" alt="새로배움터 배너">
			</div>
			<div class="form-wrap">
				<p class="notice">* 2025년 02월 11일 10:00 이전 참가비 납부자 기준</p>
				<form @submit.prevent="ConfirmFresh()">
					<div class="freshman-wrap">
						<div class="info-wrap">
							<h2>신입생 조회</h2>
							<p>신청 조회를 위해 이름과 생년월일을 입력해주세요.</p>
						</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="fresh_name">
							<input type="text" placeholder="생년월일" v-model="fresh_date">
						</div>
						<div class="btn-wrap">
							<button class="btn-submit" type="submit">신청 조회</button>
						</div>
					</div>
				</form>
				<form @submit.prevent="ConfirmStudent()">
					<div class="students-wrap">
						<div class="info-wrap">
							<h2>재학생 조회</h2>
							<p>신청 조회를 위해 이름과 학번을 입력해주세요.</p>
						</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="student_name">
							<input type="text" placeholder="학번" v-model="student_id">
						</div>
						<div class="btn-wrap">
							<button class="btn-submit" type="submit">신청 조회</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/orientation/confirm";
</style>

<script setup>
import { ref } from 'vue';
import Confirm from '@/api/orientation/confirm'

const fresh_name = ref("");
const fresh_date = ref("");
const student_name = ref("");
const student_id = ref("");

const ConfirmFresh = () => {
	let data = {
		type: 'freshman',
		name: fresh_name.value,
		birth_date: fresh_date.value,
	}
	Confirm.confirm(data).then((res) => {
    alert(res.data.message);
  }).catch((err) => {
    alert(err.response.data.message);
  })
};

const ConfirmStudent = () => {
	let data = {
		type: 'student',
		name: student_name.value,
		student_id: student_id.value,
	}
	Confirm.confirm(data).then((res) => {
    alert(res.data.message);
  }).catch((err) => {
    alert(err.response.data.message);
  })
};
</script>

