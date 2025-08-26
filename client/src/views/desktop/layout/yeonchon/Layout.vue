<template>
	<div class="desktop">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/views/desktop/layout/yeonchon/Header.vue'
import Footer from '@/views/desktop/layout/yeonchon/Footer.vue'
</script>
