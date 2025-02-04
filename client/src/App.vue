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
import Header from '@/views/layout/Header.vue'
import Footer from '@/views/layout/Footer.vue'
</script>

<style lang="sass">
@import "@/scss/common/base/reset"
</style>