<template>
	<div class="container">
		<div class="confirm-wrap">
			<div class="banner-wrap">
				<img src="@/assets/imgs/mobile/orientation/banner.png" alt="새로배움터 배너">
			</div>
			<div class="notice-wrap">
				<h2>새로배움터 신청조회</h2>
				<p>이름과 생년월일 및 학번을 입력해<br/>새로배움터 신청조회가 가능합니다.</p>
				<p>신청 폼에 기입한 이름과 입금자명에<br/>기입한 이름이 다를 경우 확인이 어려울 수 있습니다.<br/>문의사항:https://open.kakao.com/me/kwuec2025</p>
				<p class="guide">* 2025년 02월 14일 18:00 이전 신청자만 조회 가능합니다.<br>* 각 과, 단과대 집행부 제외</p>
			</div>
			<div class="form-wrap">
				<form @submit.prevent="ConfirmFresh()">
					<div class="freshman-wrap">
						<div class="info-wrap">
							<h2>신입생 조회</h2>
							<p>이름과 생년월일을 입력해주세요.</p>
						</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="fresh_name">
							<input type="text" placeholder="생년월일 ex)010810" v-model="fresh_date">
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
							<p>이름과 학번을 입력해주세요.</p>
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
@import "@/scss/mobile/orientation/confirm";
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
    if(res.data.result){
			alert("신입생 새로배움터 신청이 확인되었습니다.\n새로배움터 일정 : 2/25~27")
		} else {
			if(res.data.is_cost){
				alert("요금 납부는 확인되었지만, 폼 작성이 필요합니다.")
			} else {
				alert("폼 신청은 확인되었지만, 요금 납부가 확인되지 않았습니다.")
			}
		}
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
    if(res.data.result){
			alert("재학생 새로배움터 신청이 확인되었습니다.\n새로배움터 일정 : 2/25~27")
		} else {
			if(res.data.is_cost){
				alert("요금 납부는 확인되었지만, 폼 작성이 필요합니다.")
			} else {
				alert("폼 신청은 확인되었지만, 요금 납부가 확인되지 않았습니다.")
			}
		}
  }).catch((err) => {
    alert(err.response.data.message);
  })
};
</script>

