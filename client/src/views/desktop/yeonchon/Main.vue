<template>
  <div class="main">
    <div class="container">
      <div class="yeonchon-banner-wrap">
        <img src="@/assets/imgs/desktop/yeonchon/banner/main.svg" alt="2025 광운대학교 연촌체전">
      </div>
      <div class="content-wrap">
        <div class="today-wrap">
          <div class="title-wrap">
            <div class="h2-wrap">
              <h2>오늘 경기 일정</h2>
              <span>{{ $Helper.dateFormatYMDW(today) }}</span>
            </div>
            <router-link to="yeonchon/schedule">모든 경기 일정 보러가기</router-link>
          </div>
          <div class="navigation-wrap">
            <ul>
              <li
                v-for="item in navItems"
                :key="item.key"
                :class="[item.key, { active: item.active }]"
              >
                <div class="icon"></div>
                <div class="title">{{ item.label }}</div>
              </li>
            </ul>
          </div>
          <div class="game-wrap">
            <div class="game">
              <div class="time">1교시</div>
              <div class="sport">풋살</div>
              <div class="match-wrap">
                <div class="team red">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                  <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                  <div class="team-name">미디어커뮤니케이션학부</div>
                </div>
              </div>
              <div class="place">풋살장</div>
              <div class="etc">우천취소</div>
            </div>
            <div class="game">
              <div class="time">1교시</div>
              <div class="sport">풋살</div>
              <div class="match-wrap">
                <div class="team blue">
                  <div class="team-name">소프트</div>
                  <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                  <div class="score">3</div>
                </div>
                <div class="vs">VS</div>
                <div class="team gray">
                  <div class="score">0</div>
                  <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                  <div class="team-name gray">건공</div>
                </div>
              </div>
              <div class="place">풋살장</div>
              <div class="etc"></div>
            </div>
          </div>
        </div>
        <div class="result-wrap">
          <div class="ranking-wrap">
            <div class="title-wrap">
              <div class="h2-wrap">
                <h2>실시간 종합 순위</h2>
                <span>TOP5 학과</span>
              </div>
              <router-link to="yeonchon/schedule">전체 순위 보러가기</router-link>
            </div>
            <div class="card-wrap">
              <div class="card first">
                <div class="spot">1<span>위</span></div>
                <div class="team">미디어커뮤니케이션학부<br/>School of Media & Communication</div>
                <div class="score">250점</div>
                <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              </div>
              <div class="card second">
                <div class="spot">2<span>위</span></div>
                <div class="team">미디어커뮤니케이션학부<br/>School of Media & Communication</div>
                <div class="score">240점</div>
                <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              </div>
              <div class="card third">
                <div class="spot">3<span>위</span></div>
                <div class="team">미디어커뮤니케이션학부<br/>School of Media & Communication</div>
                <div class="score">240점</div>
                <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              </div>
            </div>
          </div>
          <div class="recent-wrap">
            <div class="title-wrap">
              <h2>최근 경기 결과</h2>
              <router-link to="yeonchon/schedule">경기 결과 보러가기</router-link>
            </div>
            <div class="card-wrap">
              <swiper class="card-swiper" effect="fade" :fadeEffect="{crossFade: true}" :pagination="{clickable: true}" :autoplay="{delay: 5000, disableOnInteraction: false}" :modules="modules">
                <swiper-slide class="card">
                  <div class="sport">풋살</div>
                  <div class="team left win">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">3</div>
                      <div class="name">수학과</div>
                    </div>
                  </div>
                  <div class="team right lose">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">0</div>
                      <div class="name">미디어커뮤니케이션학부</div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="card">
                  <div class="sport">농구</div>
                  <div class="team left win">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">3</div>
                      <div class="name">수학과</div>
                    </div>
                  </div>
                  <div class="team right lose">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">0</div>
                      <div class="name">미디어커뮤니케이션학부</div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';
import "@/scss/desktop/yeonchon/main.scss";

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

const modules = [Pagination, Autoplay, EffectFade]

const navItems = [
  { key: 'all',   label: '전체', active: true },
  { key: 'foot',  label: '풋살' },
  { key: 'bask',  label: '농구' },
  { key: 'dodg',  label: '피수' },
  { key: 'tow',   label: '줄다리기' },
  { key: 'joku',  label: '족구' },
  { key: 'ping',  label: '탁구' },
  { key: 'lol',   label: 'LOL' },
  { key: 'fc',    label: 'FC 온라인' }
]

const today = new Date()
</script>
