<template>
	<div>
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/views/mobile/layout/Header.vue'
import Footer from '@/views/mobile/layout/Footer.vue'
</script>

<style>
</style>