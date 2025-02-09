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
import Header from '@/views/desktop/layout/Header.vue'
import Footer from '@/views/desktop/layout/Footer.vue'
</script>
