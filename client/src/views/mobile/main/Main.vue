<template>
  <div class="main">
    <div class="container">
      <section class="top-content-wrap">
        <img src="@/assets/imgs/mobile/main/university.svg" alt="광운대학교" />
      </section>
      <section class="middle-content-wrap">
        <div class="banner-container">
          <SwiperBanner/>
        </div>
        <div class="confirm-wrap">
          <h2>새로배움터 신청 조회</h2>
          <router-link to="/orientation/confirm">신청 조회하기</router-link>
        </div>
        <div class="orientation-register-wrap">
          <div class="register-wrap">
            <div class="freshman-wrap">
              <h2>신입생 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/nBvi1rvNSna36RCq6" target="_blank"><b>📝[경영대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/So2tJLNEutkEhqsf7" target="_blank"><b>📝[공과대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/T8j9rg2yuvcg2Pu79" target="_blank"><b>📝[인공지능융합대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/avy6XJRNpiQghJSW6" target="_blank"><b>📝[인문사회과학대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/PR7pt7zWykserg9F6" target="_blank"><b>📝[자연과학대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/HmLCHZhRwU16rR2R7" target="_blank"><b>📝[전자정보공과대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/fuzaEixLBTtMqRUAA" target="_blank"><b>📝[정책법학대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/CCfMyrh4ifQPSDM2A" target="_blank"><b>📝[자율전공학부]</b>2025 새로배움터 신청서</a>
              </div>
            </div>
            <div class="student-wrap">
              <h2>재학생 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/LJKPvVDcpDnbC2SF9" target="_blank"><b>📝[경영대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/miWmLdB4M7VLh3MM9" target="_blank"><b>📝[공과대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/rzbzKUzRcGDpCUhWA" target="_blank"><b>📝[인공지능융합대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/UxPNZCwJUFfNh9jX9" target="_blank"><b>📝[인문사회과학대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/o8WQtX5F5NcvfJeEA" target="_blank"><b>📝[자연과학대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/2tZqYMLdJCSieq959" target="_blank"><b>📝[전자정보공과대학]</b>2025 새로배움터 신청서</a>
                <a href="https://forms.gle/UKKL6yimTTd6CZt88" target="_blank"><b>📝[정책법학대학]</b>2025 새로배움터 신청서</a>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="card-wrap">
          <div class="notice-wrap">
            <div class="title-wrap">
              <h3>공지사항</h3>
              <router-link to="/">공지사항 더보기</router-link>
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
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="events-wrap">
            <div class="title-wrap">
              <h3>월별 주요 행사</h3>
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
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                  <tr>
                    <td class="title">2025 총학생회 홈페이지 공지사항</td>
                    <td class="date">2025.01.01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
</script>
