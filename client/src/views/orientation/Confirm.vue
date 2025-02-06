<template>
	<div class="container">
		<div class="confirm-wrap">
			<form @submit.prevent="">
        <div class="form-wrap">
          <div class="title-wrap">
						<h2>2025 광운대학교 새로배움터 신청 조회</h2>
            <p>새내기 여러분들의 입학을 진심으로 축하합니다.</p>
          </div>
					<div class="freshman-wrap">
            <div class="title-wrap">신입생</div>
						<div class="input-wrap">
              <input type="text" placeholder="이름" v-model="user_pwd">
							<input type="text" placeholder="생년월일" v-model="user_pwd">
						</div>
						<div class="btn-wrap">
              <button class="btn-submit" type="submit">확인</button>
						</div>
					</div>
					<div class="students">
            <div class="title-wrap">재학생</div>
						<div class="input-wrap">
							<input type="text" placeholder="이름" v-model="user_pwd">
							<input type="text" placeholder="학번" v-model="user_pwd">
						</div>
						<div class="btn-wrap">
							<button class="btn-submit" type="submit">확인</button>
						</div>
					</div>
        </div>
      </form>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import "@/scss/orientaion/confirm";
</style>

<script setup>
</script>
