<template>
  <div class="main">
    <div class="container">
      <div class="banner-wrap">
        <img src="@/assets/imgs/desktop/yeonchon/banner.svg" alt="2025 광운대학교 연촌체전">
      </div>
      <div class="content-wrap">
        <div class="today-wrap">
          <div class="title-wrap">
            <div class="h2-wrap">
              <h2>오늘 경기 일정</h2>
              <span>2024년 9월 16일(월)</span>
            </div>
            <router-link to="yeonchon/schedule">모든 경기 일정 보러가기</router-link>
          </div>
          <div class="navigation-wrap">
            <ul>
              <li class="all">
                <div class="icon"></div>
                <div class="title">전체</div>
              </li>
              <li class="foot">
                <div class="icon"></div>
                <div class="title">풋살</div>
              </li>
            </ul>
          </div>
          <div class="game-wrap">
            <div class="game">
              <div class="time">1교시</div>
              <div class="sport">풋살</div>
              <div class="match-wrap">
                <div class="team">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                  <img src="" alt="">
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="place">풋살장</div>
              <div class="etc">우천취소</div>
            </div>
            <div class="game">
              <div class="time">1교시</div>
              <div class="sport">풋살</div>
              <div class="match-wrap">
                <div class="team">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                  <img src="" alt="">
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                  <img src="" alt="">
                </div>
              </div>
              <div class="place">풋살장</div>
              <div class="etc"></div>
            </div>
          </div>
        </div>
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
