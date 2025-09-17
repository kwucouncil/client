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
        <div class="bask-wrap"  v-show="sportId === 2">
          <div class="match-wrap" v-if="baskList.length">
            <div :class="['match', indexClass(i), { cancel: bask.rain }]" v-for="(bask, i) in baskList" :key="i">
              <template v-if="bask.bye">
                <div class="unearned-wrap" v-if="bask.unearned">
                  <img :src="bask.logo" :alt="bask.name">
                  <div class="name">{{ bask.name }}</div>
                </div>
                <div v-else></div>
              </template>
              <template v-else>
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
              </template>
            </div>
          </div>
        </div>
        <div class="dodg-wrap"  v-show="sportId === 3">
          <div class="match-wrap" v-if="dodgList.length">
            <div :class="['match', indexClass(i), { cancel: dodg.rain }]" v-for="(dodg, i) in dodgList" :key="i">
              <template v-if="dodg.bye">
                <div class="unearned-wrap" v-if="dodg.unearned">
                  <img :src="dodg.logo" :alt="dodg.name">
                  <div class="name">{{ dodg.name }}</div>
                </div>
                <div v-else></div>
              </template>
              <template v-else>
                <div :class="['team left', dodg.win === 'team1' ? 'win' : dodg.win === null ? 'draw' : dodg.team1.abstention ? 'red' : 'lose' ]">
                  <img :src="dodg.team1.logo" :alt="dodg.team1.name">
                  <div class="info-wrap">
                    <div class="score" v-if="!dodg.rain">{{ dodg.team1.score }}</div>
                    <div class="name">{{ dodg.team1.name }}</div>
                  </div>
                </div>
                <div :class="['team right', dodg.win === 'team2' ? 'win' : dodg.win === null ? 'draw' : dodg.team2.abstention ? 'red' : 'lose' ]">
                  <img :src="dodg.team2.logo" :alt="dodg.team2.name">
                  <div class="info-wrap">
                    <div class="score" v-if="!dodg.rain">{{ dodg.team2.score }}</div>
                    <div class="name">{{ dodg.team2.name }}</div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
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

const tab = ref('status')
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
    'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two',
    'twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven',
    'twenty-eight','twenty-nine','thirty','thirty-one'
  ];

  return map[i] || '';
};

const baskList = ref([]);
const dodgList = ref([]);

// 공통: 빈 매치(부전승/미편성용)
const makeBlankMatch = (group = "") => ({
  name: '',
  logo: '',   // ✅ 추가
  bye: true,
  unearned: false,
  group_name: group,
});

const baskData = ref([
  { id: 'eight',   name: '전자바이오물리학과', url: 'https://lh3.googleusercontent.com/d/1-QihfDN5yaEaAUg7ACStMMXOILM58CrJ' },
  { id: 'twelve',  name: '전자재료공학과', url: 'https://lh3.googleusercontent.com/d/19qhRL7JO44f52P1ZhBSJbJJEsbop7lOo' },
  { id: 'sixteen', name: '화학과', url: 'https://lh3.googleusercontent.com/d/1sjgolpy2uKrD5jTb6gfDkNU8YLvLdjyR' },
  { id: 'seventeen',   name: '전자융합공학과', url: 'https://lh3.googleusercontent.com/d/1DcDi78AUC-RMCGrwAwyfjqHPv4ni_WK7' },
]);

const dodgData = ref([
  { id: 'eight',   name: '전자바이오물리학과', url: 'https://lh3.googleusercontent.com/d/1-QihfDN5yaEaAUg7ACStMMXOILM58CrJ' },
  { id: 'twelve',  name: '전자재료공학과', url: 'https://lh3.googleusercontent.com/d/19qhRL7JO44f52P1ZhBSJbJJEsbop7lOo' },
  { id: 'sixteen', name: '화학과', url: 'https://lh3.googleusercontent.com/d/1sjgolpy2uKrD5jTb6gfDkNU8YLvLdjyR' },
  { id: 'seventeen',   name: '전자융합공학과', url: 'https://lh3.googleusercontent.com/d/1DcDi78AUC-RMCGrwAwyfjqHPv4ni_WK7' },
]);

// test 배열을 빠르게 찾기 위한 맵으로 변환
const buildByeOverrideMap = (arr = []) => {
  const map = new Map();
  for (const it of arr) {
    if (!it?.id) continue;
    map.set(String(it.id).toLowerCase(), {
      name: it.name ?? '',
      logo: it.url  ?? it.logo ?? '',
      unearned: true
    });
  }
  return map;
};

// 정규화 끝난 최종 리스트에서 bye 슬롯을 test로 덮어쓰기
const applyByeOverrides = (list, overridesArr = []) => {
  const ov = buildByeOverrideMap(overridesArr);
  return list.map((m, idx) => {
    if (!m?.bye) return m;
    const key = String(indexClass(idx)).toLowerCase(); // ex) 'eight', 'twelve', 'sixteen'
    const data = ov.get(key);
    return data ? { ...m, ...data } : m;
  });
};

// 라운드별 M 개수 정의
const ROUND_SPEC = {
  R2: 8, // 16강 → 8매치
  R3: 4, // 8강  → 4매치
  R4: 2, // 4강  → 2매치
  R5: 1 // 결숭 
};

// 공통: 특정 라운드(R2/R3/R4)를 M1..M{expected}로 채워 반환
const collectRound = (items, round, expected) => {
  const key = round.toUpperCase();
  const re = new RegExp(`^${key}M(\\d{1,2})$`);
  const map = new Map();

  for (const it of items) {
    const g = (it.group_name || "").toUpperCase().trim();
    const m = Number(g.match(re)?.[1]);
    if (m >= 1 && m <= expected && !map.has(m)) {
      map.set(m, it);
    }
  }

  const out = [];
  for (let m = 1; m <= expected; m++) {
    out.push(map.get(m) ?? makeBlankMatch(`${key}M${m}`));
  }
  return out;
};

// 전체 정규화: R1(32강) + R2 + R3 + R4
const normalizeBaskList = (items, byeOverrides = []) => {
  // === R1 (32강) ===
  // 규칙: API 앞 13개가 실데이터, 8/12/16번째는 부전승 빈칸
  const R1_SOURCE_COUNT = 13;
  const R1_MISSING_POS = new Set([8, 12, 16]); // 1-based index
  const r1Src = items.slice(0, R1_SOURCE_COUNT);
  const r1 = [];
  let take = 0;
  for (let pos = 1; pos <= 16; pos++) {
    if (R1_MISSING_POS.has(pos)) {
      r1.push(makeBlankMatch("")); // R1 빈칸
    } else {
      r1.push(r1Src[take++] ?? makeBlankMatch(""));
    }
  }

  // === R2 (16강) ===
  const r2 = collectRound(items, "R2", ROUND_SPEC.R2);

  // === R3 (8강) ===
  const r3 = collectRound(items, "R3", ROUND_SPEC.R3);

  // === R4 (4강) ===
  const r4 = collectRound(items, "R4", ROUND_SPEC.R4);

  // === R5 (결승) ===
  const r5 = collectRound(items, "R5", ROUND_SPEC.R5);

  const merged = [...r1, ...r2, ...r3, ...r4, ...r5];
  return applyByeOverrides(merged, byeOverrides); // ✅ 여기서 주입
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

const getMatch = (id) => {
  Yeonchon.getMatch({ sport_id: id }).then((res) => {
    if(id === 2){
      baskList.value = normalizeBaskList(res.data.items, baskData.value);
    } else if(id === 3){
      dodgList.value = normalizeBaskList(res.data.items, dodgData.value);
    }
  }).catch((err) => {
    console.log(err)
  })
};

getRank()
getLeague()
getMatch()
</script>