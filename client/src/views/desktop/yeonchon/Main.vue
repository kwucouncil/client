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
                :class="[item.key, { active: sportId === item.id }]"
                @click="() => {sportId = item.id, getMatch()}"
              >
                <div class="icon"></div>
                <div class="title">{{ item.label }}</div>
              </li>
            </ul>
          </div>
          <div class="game-wrap">
            <template v-if="matchList.length">
              <div class="game" v-for="match, id in matchList" :key="id">
                <div class="time">{{ match.start }}교시</div>
                <div class="sport">{{ match.sport }}</div>
                <div class="match-wrap" v-if="match.result">
                  <div :class="['team', match.win === 'team1' ? 'blue' : 'red']">
                    <div class="team-name">{{ match.team1.name }}</div>
                    <img :src="match.team1.logo" :alt="match.team1.name">
                    <div class="score" v-if="!match.rain">{{ match.team1.score }}</div>
                  </div>
                  <div class="vs">VS</div>
                  <div :class="['team', match.win === 'team2' ? 'blue' : 'red']">
                    <div class="score" v-if="!match.rain">{{ match.team2.score }}</div>
                    <img :src="match.team2.logo" :alt="match.team2.name">
                    <div class="team-name">{{ match.team2.name }}</div>
                  </div>
                </div>
              <div class="match-wrap" v-else>
                <div class="team">
                  <div class="team-name">{{ match.team1.name }}</div>
                  <img :src="match.team1.logo" :alt="match.team1.name">
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <img :src="match.team2.logo" :alt="match.team2.name">
                  <div class="team-name">{{ match.team2.name }}</div>
                </div>
              </div>
                <div class="place">{{ match.place }}</div>
                <div class="etc">{{ match.rain ? '우천취소' : '' }}</div>
              </div>
            </template>
            <p v-else>경기 일정이 없습니다.</p>
          </div>
        </div>
        <div class="result-wrap">
          <div class="ranking-wrap">
            <div class="title-wrap">
              <div class="h2-wrap">
                <h2>실시간 종합 순위</h2>
                <span>TOP5 학과</span>
              </div>
              <router-link to="yeonchon/status">전체 순위 보러가기</router-link>
            </div>
            <div class="card-wrap" v-if="rankList.length">
              <div
                v-for="item, i in rankList.slice(0, 3)"
                :key="i"
                :class="['card', rankClass(item.rank)]"
              >
                <div class="spot">
                  {{ item.rank }}<span>위</span>
                </div>
                <div class="team">
                  {{ item.name }}<br />
                  <span>{{ item.name_eng }}</span>
                </div>
                <div class="score">{{ item.score }}점</div>
                <img :src="item.logo" :alt="item.name" />
              </div>
            </div>
          </div>
          <div class="recent-wrap">
            <div class="title-wrap">
              <h2>최근 경기 결과</h2>
              <router-link to="yeonchon/schedule">경기 결과 보러가기</router-link>
            </div>
            <div class="card-wrap">
              <swiper class="card-swiper" effect="fade" :fadeEffect="{crossFade: true}" :pagination="{clickable: true}" :autoplay="{delay: 1500, disableOnInteraction: false}" :modules="modules">
                <swiper-slide class="card">
                  <div class="sport">풋살</div>
                  <div class="team left win">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">25</div>
                      <div class="name">연촌체전</div>
                    </div>
                  </div>
                  <div class="team right lose">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">25</div>
                      <div class="name">많은 관심</div>
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="card">
                  <div class="sport">농구</div>
                  <div class="team left win">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">09</div>
                      <div class="name">부탁</div>
                    </div>
                  </div>
                  <div class="team right lose">
                    <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                    <div class="info-wrap">
                      <div class="score">08</div>
                      <div class="name">드립니다 :)</div>
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
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref, getCurrentInstance } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade';
import "@/scss/desktop/yeonchon/main.scss";

// import required modules
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'

const { proxy } = getCurrentInstance();
const $Helper = proxy.$Helper;

const modules = [Pagination, Autoplay, EffectFade]

const navItems = [
  { id: 0, key: 'all', label: '전체' },
  { id: 1, key: 'foot',  label: '풋살' },
  { id: 2, key: 'bask',  label: '농구' },
  { id: 3, key: 'dodg',  label: '피구' },
  { id: 4, key: 'joku',  label: '족구' },
  { id: 5, key: 'ping',  label: '탁구' },
  { id: 6, key: 'tow',   label: '줄다리기' },
  { id: 7, key: 'lol',   label: 'LOL' },
  { id: 8, key: 'fc',    label: 'FC 온라인' }
]

const matchList = ref([])
const today = new Date()
const sportId = ref(0);

const getMatch = () => {
  let params = {
    date: $Helper.dateFormatYMDAPI(today),
    ...(sportId.value !== 0 ? { sport_id: sportId.value } : {}),
  }
  Yeonchon.getMatch(params).then((res) => {
    matchList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

const rankList = ref([])

const rankClass = (r) => {
  if (r === 1) return 'first'
  if (r === 2) return 'second'
  if (r === 3) return 'third'
  return ''
}

const getRank = () => {
  Yeonchon.getRank().then((res) => {
    rankList.value = res.data.standings
  }).catch((err) => {
    console.log(err)
  })
};

const getRecent = () => {
  let params = {
    limit: 5
  }
  Yeonchon.getRecent(params).then((res) => {
  }).catch((err) => {
    console.log(err)
  })
};

getRank()
getMatch()
getRecent()
</script>
