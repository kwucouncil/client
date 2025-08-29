<template>
	<div class="desktop">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/views/desktop/layout/yeonchon/Header.vue'
import Footer from '@/views/desktop/layout/yeonchon/Footer.vue'
</script>
