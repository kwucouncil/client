<template>
  <div class="main">
    <div class="container">
      <section class="top-content-wrap">
        <img src="@/assets/imgs/mobile/main/university.png" alt="광운대학교" />
      </section>
      <section class="middle-content-wrap">
        <div class="banner-container">
          <SwiperBanner/>
        </div>
        <!-- <div class="confirm-wrap">
          <h2>2025 새로배움터 신청 조회</h2>
          <router-link to="/orientation/confirm">신청 조회하기</router-link>
        </div>
        <div class="orientation-register-wrap">
          <div class="register-wrap">
            <div class="freshman-wrap">
              <h2>환불 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/9qTAVqD7Bswk1veJ6" target="_blank"><b>미신청자(구글폼)</b>&ensp;2025 새로배움터 환불서</a>
              </div>
            </div>
          </div>
        </div> -->
        <div class="notice-wrap">
          <div class="title-wrap">
            <h3>공지사항</h3>
            <router-link to="/notice"></router-link>
          </div>
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
        <!-- <div class="card-wrap">
          <div class="card-notice-wrap"></div>
          <div class="card-notice-wrap"></div>
          <div class="card-notice-wrap"></div>
          <div class="card-notice-wrap"></div>
        </div> -->
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/main/main";
</style>

<script setup>
import SwiperBanner from '@/views/mobile/main/component/SwiperBanner.vue'
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
