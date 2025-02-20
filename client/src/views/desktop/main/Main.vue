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
        <div class="confirm-wrap">
          <h2>2025 새로배움터 신청 조회</h2>
          <router-link to="/orientation/confirm">신청 조회하기</router-link>
        </div>
        <div class="orientation-register-wrap">
          <div class="register-wrap">
            <div class="freshman-wrap">
              <h2>신입생 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/y7A2wFUPUoKXBABh8" target="_blank"><b>📝[신입생(자율전공 외)]</b>2025 새로배움터 2차 신청서</a>
                <a href="https://forms.gle/B4zhShDSrfBDopPVA" target="_blank"><b>📝[신입생(자율전공학부)]</b> 2025 새로배움터 2차 신청서</a>
              </div>
            </div>
            <div class="student-wrap">
              <h2>재학생 신청</h2>
              <div class="form-wrap">
                <a href="https://forms.gle/CY78MoXP8sFP3ioUA" target="_blank"><b>📝[재학생]</b>2025 새로배움터 2차 신청서</a>
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
@import "@/scss/desktop/main/main";
</style>

<script setup>
import SwiperBanner from '@/views/desktop/main/component/SwiperBanner.vue'
</script>
