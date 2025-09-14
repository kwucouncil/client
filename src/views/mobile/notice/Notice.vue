<template>
  <div class="container">
    <div class="detail-banner-wrap">
      <img src="@/assets/imgs/mobile/common/detail_banner.png" alt="광운대학교" />
    </div>
    <div class="notice-wrap">
      <h2>공지사항</h2>
      <div class="table-wrap">
        <table>
          <tbody>
            <tr v-for="notice in noticeList" v-bind:key="notice.id" @click="toDetail(notice.id)">
              <td class="title" width="70%">{{ notice.title }}</td>
              <td class="date">{{ $Helper.dateFormatYMD(notice.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/notice/notice";
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

getNoticeList()

const toDetail = (id) => {
  router.push(`notice/${id}`);
}
</script>

