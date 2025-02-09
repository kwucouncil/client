<template>
	<div class="container">
		<div class="confirm-wrap">
			<div class="title-wrap">
				<h2>2025 광운대학교 새로배움터 신청 조회</h2>
				<p>새내기 여러분들의 입학을 진심으로 축하합니다.</p>
			</div>
			<div class="form-wrap">
				<form @submit.prevent="ConfirmFresh()">
					<div class="freshman-wrap">
						<div class="title-wrap">신입생</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="fresh_name">
							<input type="text" placeholder="생년월일" v-model="fresh_date">
						</div>
						<div class="btn-wrap">
							<button class="btn-submit" type="submit">확인</button>
						</div>
					</div>
				</form>
				<form @submit.prevent="ConfirmStudent()">
					<div class="students">
						<div class="title-wrap">재학생</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="student_name">
							<input type="text" placeholder="학번" v-model="student_id">
						</div>
						<div class="btn-wrap">
							<button class="btn-submit" type="submit">확인</button>
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
    console.log(err);
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
    console.log(err);
  })
};
</script>

