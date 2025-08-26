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
import Header from '@/views/desktop/layout/basic/Header.vue'
import Footer from '@/views/desktop/layout/basic/Footer.vue'
</script>
