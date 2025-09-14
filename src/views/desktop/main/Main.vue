<template>
  <div class="main">
    <div class="container">
      <section class="top-content-wrap">
        <img src="@/assets/imgs/desktop/main/university.svg" alt="광운대학교">
      </section>
      <section class="middle-content-wrap">
        <div class="banner-container">
          <SwiperBanner/>
        </div>
        <!-- <div class="confirm-wrap">
          <h2>2025 새로배움터 신청 조회</h2>
          <router-link to="/orientation/confirm">신청 조회하기</router-link>
        </div> -->
        <!-- <div class="orientation-register-wrap">
          <div class="register-wrap">
            <div class="freshman-wrap">
              <h2>환불 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/9qTAVqD7Bswk1veJ6" target="_blank"><b>미신청자(구글폼)</b>&ensp;2025 새로배움터 환불서</a>
              </div>
            </div>
          </div>
        </div> -->
        <div class="card-wrap">
          <div class="notice-wrap">
            <div class="title-wrap">
              <h3>공지사항</h3>
              <router-link to="/notice">공지사항 더보기</router-link>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>작성일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="notice in noticeList.slice(0, 5)" v-bind:key="notice.id" @click="toDetail(notice.id)">
                    <td class="title">{{ notice.title }}</td>
                    <td class="date">{{ $Helper.dateFormatYMD(notice.updated_at) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="events-wrap">
            <div class="title-wrap">
              <h3>최근 주요 행사</h3>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>제목</th>
                    <th>행사일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="title">총학생회 홈페이지 리뉴얼 오픈</td>
                    <td class="date">2025.08.20</td>
                  </tr>
                  <tr>
                    <td class="title">2025 연촌체전 카드뉴스 공개</td>
                    <td class="date">2025.08.25</td>
                  </tr>
                  <tr>
                    <td class="title">2025학년도 2학기 개강</td>
                    <td class="date">2025.09.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 연촌체전 홈페이지 오픈</td>
                    <td class="date">2025.09.07</td>
                  </tr>
                  <tr>
                    <td class="title">2025 연촌체전 개최</td>
                    <td class="date">2025.09.08</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/main/main";
</style>

<script setup>
import SwiperBanner from '@/views/desktop/main/component/SwiperBanner.vue'

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

const toDetail = (id) => {
  router.push(`notice/${id}`);
}

getNoticeList()
</script>
