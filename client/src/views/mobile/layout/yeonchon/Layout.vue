<template>
	<div class="mobile">
		<Header />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from '@/views/mobile/layout/basic/Header.vue'
import Footer from '@/views/mobile/layout/basic/Footer.vue'
</script>
