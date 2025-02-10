<template>
  <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="mySwiper banner-wrap"
  >
    <swiper-slide><img src="@/assets/imgs/desktop/main/banner/orientation1.svg" alt="banner_1"></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/desktop/main/banner/ex1.svg" alt="banner_1"></swiper-slide>
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import '@/scss/desktop/main/banner.scss';

  // import required modules
  import { Pagination, Autoplay } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Autoplay],
      };
    },
  };
</script>
