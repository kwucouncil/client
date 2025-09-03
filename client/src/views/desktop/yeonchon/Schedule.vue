<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/schedule.svg" alt="경기 일정" />
    </div>
    <div class="schedule-wrap">
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
        <div class="calender-wrap">
          <div class="date-wrap">
            <div class="eve">{{ $Helper.dateFormatYMDW(addDays(date, -1)) }}</div>
            <div class="btn-wrap">
              <button class="btn-left" type="button" @click="prevDay"></button>
              <div class="today-wrap">
                {{ $Helper.dateFormatYMDW(date) }}
                <button class="btn-calender" type="button" @click="showPicker = !showPicker"></button>
              </div>
              <button class="btn-right" type="button" @click="nextDay"></button>
            </div>
            <div class="next">{{ $Helper.dateFormatYMDW(addDays(date, 1)) }}</div>
          </div>
          <div class="picker-wrap" v-show="showPicker" ref="pickerRef">
            <VDatePicker :is-required=true @update:model-value="onDatePicked" mode="date" :select-attribute="selectAttr" :attributes="attr" class="date-picker" v-model="date" :min-date="MIN_DATE" :max-date="MAX_DATE" />
          </div>
        </div>
        <div class="option-wrap">
          <div class="tip-wrap">
            <div class="tip blue">승리학과</div>
            <div class="tip gray">패배학과</div>
            <div class="tip red">기권학과</div>
          </div>
          <div class="select-wrap">
            <select v-model="colleage" @change="dept = 'all'">
              <option value="all">단과 대학</option>
              <option
                v-for="col in colleges"
                :key="col.value"
                :value="col.value"
              >
                {{ col.label }}
              </option>
            </select>
            <select
              v-model="dept"
              :disabled="filteredDepts.length === 0"
              @change="getMatch()"
            >
              <option value="all">학과(부)</option>
              <option
                v-for="dept in filteredDepts"
                :key="dept.value"
                :value="dept.value"
              >
                {{ dept.label }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="game-wrap">
        <div class="game" v-if="matchList.length" v-for="match, id in matchList" :key="id">
          <div class="time">{{ match.start }}교시</div>
          <div class="sport">{{ match.sport }}</div>
          <div class="match-wrap">
            <div :class="['team', match.win === 'team1' ? 'blue' : 'red']">
              <div class="team-name">{{ match.team1.name }}</div>
              <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              <div class="score" v-if="!match.rain">{{ match.team1.score }}</div>
            </div>
            <div class="vs">VS</div>
            <div :class="['team', match.win === 'team2' ? 'blue' : 'red']">
              <div class="score" v-if="!match.rain">{{ match.team2.score }}</div>
              <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              <div class="team-name">{{ match.team2.name }}</div>
            </div>
          </div>
          <div class="place">{{ match.place }}</div>
          <div class="etc">{{ match.rain ? '우천취소' : '' }}</div>
        </div>
        <p v-else>일치하는 경기 일정이 없습니다.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'v-calendar/style.css';
@import "@/scss/desktop/yeonchon/schedule";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref, watch, onMounted, computed, onBeforeUnmount, getCurrentInstance } from 'vue';
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

const date = ref(new Date('2025-09-01'));

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

const colleges = [
  {
    value: 1,
    label: '경영대학',
    depts: [
      { value: 1, label: '경영학부' },
      { value: 2, label: '국제통상학부' },
    ],
  },
  {
    value: 2,
    label: '자연과학대학',
    depts: [
      { value: 3, label: '수학과' },
      { value: 4, label: '화학과' },
      { value: 5, label: '전자바이오물리학과' },
      { value: 6, label: '스포츠융합과학과' },
    ],
  },
  {
    value: 3,
    label: '공과대학',
    depts: [
      { value: 7, label: '화학공학과' },
      { value: 8, label: '환경공학과' },
      { value: 9, label: '건축공학과' },
      { value: 10, label: '건축학과' },
    ],
  },
  {
    value: 4,
    label: '인공지능융합대학',
    depts: [
      { value: 11, label: '컴퓨터정보공학부' },
      { value: 12, label: '소프트웨어학부' },
      { value: 13, label: '정보융합학부' },
      { value: 14, label: '로봇학부' },
    ],
  },
  {
    value: 5,
    label: '인문사회과학대학',
    depts: [
      { value: 15, label: '국어국문학과' },
      { value: 16, label: '영어산업학과' },
      { value: 17, label: '미디어커뮤니케이션학부' },
      { value: 18, label: '산업심리학과' },
      { value: 19, label: '동북아문화산업학부' },
    ],
  },
  {
    value: 6,
    label: '전자정보공과대학',
    depts: [
      { value: 20, label: '전자공학과' },
      { value: 21, label: '전자통신공학과' },
      { value: 22, label: '전자융합공학과' },
      { value: 23, label: '전자재료공학과' },
      { value: 24, label: '전기공학과' },
      { value: 25, label: '반도체시스템공학과' },
    ],
  },
  {
    value: 7,
    label: '정책법학대학',
    depts: [
      { value: 26, label: '법학부' },
      { value: 27, label: '행정학과' },
      { value: 28, label: '국제학부' },
    ],
  },
  {
    value: 8,
    label: '인제니움대학',
    depts: [{ value: 29, label: '자율전공학부' }],
  },
]

const colleage = ref('all')
const dept = ref('all')

const currentCollege = computed(() =>
  colleges.find(c => c.value === colleage.value) || null
)

const filteredDepts = computed(() =>
  currentCollege.value ? currentCollege.value.depts : []
)

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
    ...(dept.value !== 'all' ? { department_id: dept.value } : {}),
  }
  Yeonchon.getMatch(params).then((res) => {
    matchList.value = res.data.items
  }).catch((err) => {
    console.log(err)
  })
};

getMatch()
</script>