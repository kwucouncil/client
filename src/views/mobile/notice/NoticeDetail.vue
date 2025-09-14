<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/mobile/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="notice-detail-wrap">
      <h2>공지사항</h2>
      <ul>
        <li>
          {{ notice.title }}
          <span>{{ $Helper.dateFormatYMD(notice.updated_at) }}</span>
        </li>
      </ul>
      <div class="text-wrap">
        <p>
          {{ notice.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/notice/notice-detail";
</style>

<script setup>
import Notice from '@/api/notice/notice';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const notice = ref({})
const { params } = useRouter().currentRoute.value;

const getNoticeDetail = () => {
  Notice.getNoticeDetail(params.id).then((res) => {
    notice.value = res.data.data
  }).catch((err) => {
    console.log(err)
  })
};

getNoticeDetail();
</script>

