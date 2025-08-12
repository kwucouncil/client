<template>
  <div class="container">
    <div class="banner-wrap">
      <img src="@/assets/imgs/desktop/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="contact-wrap">
      <div class="tab-wrap">
        <div class="title-wrap">소통</div>
        <ul>
          <li :class="{ active: tab === 'Info' }" @click="tab = 'Info'">연락처</li>
          <li :class="{ active: tab === 'Guide' }" @click="tab = 'Guide'">오시는 길</li>
        </ul>
      </div>
      <div class="content-wrap">
        <component :is="current" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/contact/contact";
</style>

<script setup>
import { ref, computed  } from 'vue';
import Info from '@/views/desktop/contact/component/Info.vue'
import Guide from '@/views/desktop/contact/component/Guide.vue'

const tab = ref('Info')
const components = { Info, Guide }
const current = computed(() => components[tab.value])
</script>

