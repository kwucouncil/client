<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/status.svg" alt="경기 현황" />
    </div>
    <div class="status-wrap">
      <div class="tab-wrap">
        <div :class="{ active: tab === 'rank' }" @click="tab = 'rank'">종합 순위</div>
        <div :class="{ active: tab === 'status' }" @click="tab = 'status'">종목별 현황</div>
      </div>
      <div v-show="tab === 'rank'" class="rank-wrap">
        <div class="date">{{ updatedAt }}</div>
        <div class="card-wrap" v-if="rankList.length">
          <div
            v-for="item, i in rankList"
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
            <div class="score">
              <span>총점</span>{{ item.score }}점
            </div>
            <img :src="item.logo" :alt="item.name" />
          </div>
        </div>
        <div v-else class="empty">집계된 순위가 없습니다.</div>
      </div>
      <div v-show="tab === 'status'" class="sport-status-wrap">
        <div class="navigation-wrap">
          <ul>
            <li
              v-for="item in navItems"
              :key="item.key"
              :class="[item.key, { active: sportId === item.id }]"
              @click="() => {sportId = item.id, getMatch(item.id)}"
            >
              <div class="icon"></div>
              <div class="title">{{ item.label }}</div>
            </li>
          </ul>
        </div>
        <div class="foot-wrap" v-show="sportId === 1">
          <div class="league-wrap">
            <div class="league" v-for="(teams, groupName) in leagueList" :key="groupName">
              <table>
                <thead>
                  <tr>
                    <th colspan="2">{{ groupName }}</th>
                    <th>경기</th>
                    <th>승</th>
                    <th>무</th>
                    <th>패</th>
                    <th>득실</th>
                    <th>승점</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="team in teams" :key="team.name" :class="{ wild: groupName === 'G조' && team.rank === 3 }">
                    <td>{{ team.rank }}</td>
                    <td><img :src="team.logo" :alt="team.name">{{ team.name }}</td>
                    <td>{{ team.matches }}</td>
                    <td>{{ team.wins }}</td>
                    <td>{{ team.draws }}</td>
                    <td>{{ team.losses }}</td>
                    <td>{{ team.goal_difference }}</td>
                    <td>{{ team.points }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="bask-wrap"  v-show="sportId === 2">
          <div class="match-wrap" v-if="baskList.length">
            <div :class="['match', indexClass(i), { cancel: bask.rain }]" v-for="(bask, i) in baskList.slice(0, 13)" :key="i">
              <div :class="['team left', bask.win === 'team1' ? 'win' : bask.win === null ? 'draw' : bask.team1.abstention ? 'red' : 'lose' ]">
                <img :src="bask.team1.logo" :alt="bask.team1.name">
                <div class="info-wrap">
                  <div class="score" v-if="!bask.rain">{{ bask.team1.score }}</div>
                  <div class="name">{{ bask.team1.name }}</div>
                </div>
              </div>
              <div :class="['team right', bask.win === 'team2' ? 'win' : bask.win === null ? 'draw' : bask.team2.abstention ? 'red' : 'lose' ]">
                <img :src="bask.team2.logo" :alt="bask.team2.name">
                <div class="info-wrap">
                  <div class="score" v-if="!bask.rain">{{ bask.team2.score }}</div>
                  <div class="name">{{ bask.team2.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="foot-wrap" v-show="sportId === 2">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 3">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 4">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 5">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 6">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 7">준비 중입니다.</div>
        <div class="foot-wrap" v-show="sportId === 8">준비 중입니다.</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/status";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref } from 'vue';

const tab = ref('rank')
const rankList = ref([])
const updatedAt = ref('')

const sportId = ref(1);
const leagueList = ref([])

const navItems = [
  { id: 1, key: 'foot',  label: '풋살' },
  { id: 2, key: 'bask',  label: '농구' },
  { id: 3, key: 'dodg',  label: '피구' },
  { id: 4, key: 'joku',  label: '족구' },
  { id: 5, key: 'ping',  label: '탁구' },
  { id: 6, key: 'tow',   label: '줄다리기' },
  { id: 7, key: 'lol',   label: 'LOL' },
  { id: 8, key: 'fc',    label: 'FC 온라인' }
]

const rankClass = (r) => {
  if (r === 1) return 'first'
  if (r === 2) return 'second'
  if (r === 3) return 'third'
  return ''
}

const indexClass = (i) => {
  const map = [
    'one','two','three','four','five','six','seven','eight',
    'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen'
  ];
  return map[i] || '';
};

const getRank = () => {
  Yeonchon.getRank().then((res) => {
    updatedAt.value = res.data.updated_at
    rankList.value = res.data.standings
  }).catch((err) => {
    console.log(err)
  })
};

const getLeague = () => {
  Yeonchon.getLeague().then((res) => {
    leagueList.value = res.data.standings
  }).catch((err) => {
    console.log(err)
  })
};

const baskList = ref([])

const getMatch = (id) => {
  return 0;
  Yeonchon.getMatch({ sport_id: id }).then((res) => {
    baskList.value = res.data.items;
  }).catch((err) => {
    console.log(err)
  })
};

getRank()
getLeague()
getMatch()
</script>