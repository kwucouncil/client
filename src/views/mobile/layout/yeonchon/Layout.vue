<template>
	<div class="mobile">
		<Header />
		<main class="yeonchon">
			<router-view />
		</main>
	</div>
</template>

<script setup>
import Header from '@/views/mobile/layout/yeonchon/Header.vue'
</script>
