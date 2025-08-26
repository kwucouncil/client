<template>
  <div class="main">
    <div class="container">
      <div class="banner-wrap">
        <img src="@/assets/imgs/desktop/yeonchon/banner.svg" alt="2025 광운대학교 연촌체전">
      </div>
      <div class="content-wrap">
        
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/main";
</style>

<script setup>
import Notice from '@/api/notice/notice';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const noticeList = ref([])

const getNoticeList = () => {
  Notice.getNoticeList().then((res) => {
    noticeList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

const toDetail = (id) => {
  router.push(`notice/${id}`);
}

getNoticeList()
</script>
