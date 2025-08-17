<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/desktop/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="notice-wrap">
      <div class="content-wrap">
        <h2>공지사항</h2>
        <ul>
          <li v-for="notice in noticeList" v-bind:key="notice.id">
            <router-link :to="`/notice/${notice.id}`">
              {{ notice.title }}
              <span>{{ notice.content }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/notice/notice";
</style>

<script setup>
import Notice from '@/api/notice/notice';
import { ref } from 'vue';
const noticeList = ref([])

const getNoticeList = () => {
  Notice.getNoticeList().then((res) => {
    noticeList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getNoticeList()
</script>

