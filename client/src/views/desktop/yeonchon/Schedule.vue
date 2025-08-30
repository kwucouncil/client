<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/schedule.svg" alt="경기 일정" />
    </div>
    <div class="schedule-wrap">
      <div class="today-wrap">
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
          <div class="calender-wrap">
            <div class="date-wrap">
              <div class="eve">{{ $Helper.dateFormatYMDW(addDays(date, -1)) }}</div>
              <div class="btn-wrap">
                <button class="btn-left" type="button" @click="showPicker = !showPicker"></button>
                <div class="today-wrap">
                  {{ $Helper.dateFormatYMDW(date) }}
                  <button class="btn-calender" type="button" @click="showPicker = !showPicker"></button>
                </div>
                <button class="btn-right" type="button" @click="showPicker = !showPicker"></button>
              </div>
              <div class="next">{{ $Helper.dateFormatYMDW(addDays(date, 1)) }}</div>
            </div>
            <div class="picker-wrap" v-show="showPicker">
              <VDatePicker  @update:model-value="v => console.log($Helper.dateFormatYMD(v))" popover="true" mode="date" :select-attribute="selectAttr" :attributes="attr" class="date-picker" v-model="date" min-date="2025-09-08" max-date="2025-10-02" />
            </div>
          </div>
          <div class="option-wrap"></div>
        </div>
        <div class="game-wrap">
          <div class="game">
            <div class="time">1교시</div>
            <div class="sport">풋살</div>
            <div class="match-wrap">
              <div class="team">
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
              <div class="team">
                <div class="team-name">소프트</div>
                <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
              </div>
              <div class="vs">VS</div>
              <div class="team">
                <img src="@/assets/imgs/desktop/common/kwangwoon.svg" alt="">
                <div class="team-name">건공</div>
              </div>
            </div>
            <div class="place">풋살장</div>
            <div class="etc"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'v-calendar/style.css';
@import "@/scss/desktop/yeonchon/schedule";
</style>



<script setup>
import { ref } from 'vue';

const showPicker = ref(false)

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

const date = ref(new Date());

const addDays = (base, n) => {
  const d = new Date(base);
  d.setDate(d.getDate() + n);
  return d;
}

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
    ],
  },
])

const selectAttr = ref({ highlight: { style: {backgroundColor: '#5317AB',}} });
</script>