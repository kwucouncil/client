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
    <!-- <swiper-slide><a href="/#/yeonchon" target="_blank"><img src="@/assets/imgs/mobile/main/banner/yeonchon.png" alt="연촌체전" /></a></swiper-slide> -->
    <swiper-slide><a href="https://www.instagram.com/p/DKt3HXZSpUl/" target="_blank"><img src="@/assets/imgs/mobile/main/banner/aines.png" alt="아이네스:조각" /></a></swiper-slide>
    <swiper-slide><a href="https://www.instagram.com/p/DIYEl4dSVo3/" target="_blank"><img src="@/assets/imgs/mobile/main/banner/association.png" alt="학생총회" /></a></swiper-slide>
    <!-- <swiper-slide><img src="@/assets/imgs/mobile/main/banner/orientation.png" alt="새로배움터" /></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/mobile/main/banner/eunbi.png" alt="권은비" /></swiper-slide>
    <swiper-slide><img src="@/assets/imgs/mobile/main/banner/jinro.png" alt="하이트진로" /></swiper-slide>
    <swiper-slide><a href="https://open.kakao.com/o/sY8gKDeh" target="_blank"><img src="@/assets/imgs/mobile/main/banner/pre-learning.png" alt="자율전공 미리배움터"></a></swiper-slide> -->
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
