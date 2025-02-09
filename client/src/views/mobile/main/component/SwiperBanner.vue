<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper banner-wrap"
  >
    <swiper-slide><img src="@/assets/imgs/mobile/main/banner/orientation1.svg" alt="banner_1"></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/mobile/main/banner/ex1.svg" alt="banner_1"></swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import '@/scss/mobile/main/banner.scss';

  // import required modules
  import { Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay],
      };
    },
  };
</script>
