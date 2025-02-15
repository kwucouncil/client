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
    <swiper-slide><img src="@/assets/imgs/desktop/main/banner/orientation.png" alt="새로배움터"></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/desktop/main/banner/eunbi.png" alt="권은비"></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/desktop/main/banner/jinro.png" alt="하이트진로"></swiper-slide>
    <swiper-slide><a href="https://open.kakao.com/o/sY8gKDeh" target="_blank"><img src="@/assets/imgs/desktop/main/banner/pre-learning.png" alt="자율전공 미리배움터"></a></swiper-slide>
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
