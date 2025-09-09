<template>
  <div class="container">
    <div class="schedule-wrap">
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
        <div class="calender-wrap">
          <div class="date-wrap">
            <button class="btn-left" type="button" @click="prevDay"></button>
            <div class="today-wrap" @click="showPicker = !showPicker">
              <button class="btn-calender" type="button"></button>
              {{ $Helper.dateFormatYMD(date) }}
            </div>
            <button class="btn-right" type="button" @click="nextDay"></button>
          </div>
          <div class="picker-wrap" v-show="showPicker">
            <div class="bg"></div>
            <div ref="pickerRef">
              <VDatePicker :is-required=true @update:model-value="onDatePicked" mode="date" :select-attribute="selectAttr" :attributes="attr" class="date-picker" v-model="date" :min-date="MIN_DATE" :max-date="MAX_DATE" />
            </div>
          </div>
        </div>
        <div class="tip-wrap">
          <div class="tip blue">승리</div>
          <div class="tip gray">패배</div>
          <div class="tip red">기권</div>
        </div>
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
            <div class="info red" v-else>경기취소</div>
            <div class="match-wrap" v-if="match.result">
              <div :class="['team', match.win === 'team1' ? 'win' : match.win === null ? 'draw' : 'lose' ]">
                <div class="team-name">{{ match.team1.name }}</div>
                <img :src="match.team1.logo" :alt="match.team1.name">
                <div class="score" v-if="!match.rain">{{ match.team1.score }}</div>
              </div>
              <div class="vs">VS</div>
              <div :class="['team', match.win === 'team2' ? 'win' : match.win === null ? 'draw' : 'lose' ]">
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
        <p v-else>일치하는 경기 일정이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'v-calendar/style.css';
@import "@/scss/mobile/yeonchon/schedule";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref, watch, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();
const $Helper = proxy.$Helper;

const showPicker = ref(false)
const pickerRef = ref(null);

const sportId = ref(0);

const onDatePicked = () => {
  showPicker.value = false;
};

const handleClickOutside = (e) => {
  if (pickerRef.value && pickerRef.value.contains(e.target)) return;
  showPicker.value = false;
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') showPicker.value = false;
  });
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

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

const MIN_DATE = new Date('2025-09-08');
const MAX_DATE = new Date('2025-10-02');

const date = ref(new Date());

const addDays = (base, n) => {
  const d = new Date(base);
  d.setDate(d.getDate() + n);
  return d;
}

const clampDate = (d) => {
  if (d < MIN_DATE) return new Date(MIN_DATE);
  if (d > MAX_DATE) return new Date(MAX_DATE);
  return d;
};

const prevDay = () => {
  date.value = clampDate(addDays(date.value, -1));
};
const nextDay = () => {
  date.value = clampDate(addDays(date.value, 1));
};

const attr = ref([
  {
    // Boolean
    dot: {
      style: {
        backgroundColor: '#5317AB',
      },
    },
    dates: [
      '2025-09-08',
      '2025-09-09',
      '2025-09-10',
      '2025-09-11',
      '2025-09-12',
      '2025-09-15',
      '2025-09-16',
      '2025-09-17',
      '2025-09-18',
      '2025-09-19',
      '2025-09-22',
      '2025-09-23',
      '2025-09-24',
      '2025-09-25',
      '2025-09-26',
      '2025-10-02',
    ],
  },
])

const selectAttr = ref({ highlight: { style: {backgroundColor: '#5317AB',}} });

watch(date, (v) => {
  if (!v) return;
  const d = new Date(v);
  d.setHours(0, 0, 0, 0);
  getMatch(d);
}, { flush: 'post' });

const matchList = ref([])

const getMatch = () => {
  let params = {
    date: $Helper.dateFormatYMDAPI(date.value),
    ...(sportId.value !== 0 ? { sport_id: sportId.value } : {}),
  }
  Yeonchon.getMatch(params).then((res) => {
    matchList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getMatch()
</script>