<template>
  <div class="main">
    <div class="container">
      <div class="content-wrap">
        <div class="today-wrap">
          <div class="navigation-wrap">
            <ul>
              <li
                v-for="item in navItems"
                :key="item.key"
                :class="[item.key, { active: sportId === item.id }]"
                @click="() => {sportId = item.id, getMatch()}"
              >
                {{ item.label }}
              </li>
            </ul>
          </div>
          <div class="title-wrap">
            <h2>오늘 경기 일정</h2>
            <router-link to="yeonchon/schedule">+ 더보기</router-link>
          </div>
          <div class="game-wrap">
            <template v-if="matchList.length">
              <div :class="['game', { rain: match.rain }]" v-for="match, id in matchList" :key="id">
                <div class="info" v-if="!match.rain">
                  <div class="sport">{{ match.sport }}</div>
                  <span>|</span>
                  <div class="place">{{ match.place }}</div>
                  <span>|</span>
                  <div class="time">{{ match.start }}교시</div>
                </div>
                <div class="info red" v-else>우천취소</div>
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
              </div>
            </template>
            <p v-else>경기 일정이 없습니다.</p>
          </div>
        </div>
        <div class="bar"></div>
        <div class="ranking-wrap">
          <div class="title-wrap">
            <h2>실시간 종합 순위</h2>
            <router-link to="yeonchon/status">+ 더보기</router-link>
          </div>
          <div class="card-wrap" v-if="rankList.length">
            <div
              v-for="item, i in rankList.slice(0,5)"
              :key="i"
              :class="['card', rankClass(item.rank)]"
            >
              <div class="spot">
                {{ item.rank }}<span>위</span>
              </div>
              <div class="team">
                {{ item.name }}<span>{{ item.name_eng }}</span>
              </div>
              <div class="score">{{ item.score }}점</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/yeonchon/main";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref, getCurrentInstance } from 'vue';


const { proxy } = getCurrentInstance();
const $Helper = proxy.$Helper;

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

getMatch()
getRank()
</script>
