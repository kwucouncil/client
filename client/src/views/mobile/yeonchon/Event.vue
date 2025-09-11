<template>
  <div class="container">
    <div class="event-wrap">
      <div v-show="step === 1">
        <div class="desc">
          <p>기간 : 9/7(일) ~ 21(일)</p>
          <p>상품 수령을 위해<br/><b>이름/학번/전화번호</b>를 입력해주세요.</p>
          <span>* 잘못된 정보 기입은 상품 수령이 불가할 수 있으니<br/>정확하게 입력해 주세요.</span>
          <span>* 신청이 완료되면 수정 및 취소는 불가합니다.</span>
        </div>
        <div class="input-container">
          <div class="input-wrap">
            <div class="label">이름</div>
            <input type="text" name="name" v-model="name" placeholder="홍길동"/>
          </div>
          <div class="input-wrap">
            <div class="label">학번</div>
            <input type="text" name="student_id" v-model="student_id" placeholder="2025010101" maxlength="10"/>
          </div>
          <div class="input-wrap">
            <div class="label">전화번호</div>
            <input type="text" name="phone" v-model="phone" placeholder="010-0000-0000" maxlength="13"/>
          </div>
          <div class="input-wrap">
            <div class="label">1등 예상 학과(부)</div>
            <div class="select-wrap">
              <select name="first-college" v-model="picks.first.college" @change="picks.first.dept = 'all'">
                <option value="all">단과 대학</option>
                <option v-for="col in colleges" :key="col.value" :value="col.value">
                  {{ col.label }}
                </option>
              </select>
              <select
                name="first-dept"
                v-model="picks.first.dept"
                :disabled="firstDepts.length === 0"
              >
                <option value="all">학과(부)</option>
                <option v-for="d in firstDepts" :key="d.value" :value="d.value">
                  {{ d.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="input-wrap">
            <div class="label">2등 예상 학과(부)</div>
            <div class="select-wrap">
              <select name="second-college" v-model="picks.second.college" @change="picks.second.dept = 'all'">
                <option value="all">단과 대학</option>
                <option v-for="col in colleges" :key="col.value" :value="col.value">
                  {{ col.label }}
                </option>
              </select>
              <select
                v-model="picks.second.dept"
                name="second-dept"
                :disabled="secondDepts.length === 0"
              >
                <option value="all">학과(부)</option>
                <option v-for="d in secondDepts" :key="d.value" :value="d.value">
                  {{ d.label }}
                </option>
              </select>
            </div>
          </div>
          <div class="input-wrap">
            <div class="label">3등 예상 학과(부)</div>
            <div class="select-wrap">
              <select name="third-college" v-model="picks.third.college" @change="picks.third.dept = 'all'">
                <option value="all">단과 대학</option>
                <option v-for="col in colleges" :key="col.value" :value="col.value">
                  {{ col.label }}
                </option>
              </select>
              <select
                name="third-dept"
                v-model="picks.third.dept"
                :disabled="thirdDepts.length === 0"
              >
                <option value="all">학과(부)</option>
                <option v-for="d in thirdDepts" :key="d.value" :value="d.value">
                  {{ d.label }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="btn-wrap">
          <button :disabled="!isFormValid" @click="step = 2">다음</button>
        </div>
      </div>
      <div v-show="step === 2" class="done">
        <div class="desc">
          <p>상품 수령을 위해<br/><b>이름/학번/전화번호</b>를 입력해주세요.</p>
          <span>* 잘못된 정보 기입은 상품 수령이 불가할 수 있으니<br/>정확하게 입력해 주세요.</span>
        </div>
        <div class="input-container">
          <div class="input-wrap">
            <div class="label">이름</div>
            <input type="text" name="name" v-model="name" disabled/>
          </div>
          <div class="input-wrap">
            <div class="label">학번</div>
            <input type="text" name="student_id" v-model="student_id" disabled/>
          </div>
          <div class="input-wrap">
            <div class="label">전화번호</div>
            <input type="text" name="phone" v-model="phone" disabled/>
          </div>
          <div class="input-wrap">
            <div class="label">1등 예상 학과(부)</div>
            <input class="input-dep" type="text" name="first" v-model="firstLabel" disabled/>
          </div>
          <div class="input-wrap">
            <div class="label">2등 예상 학과(부)</div>
            <input class="input-dep" type="text" name="second" v-model="secondLabel" disabled/>
          </div>
          <div class="input-wrap">
            <div class="label">3등 예상 학과(부)</div>
            <input class="input-dep" type="text" name="second" v-model="thirdLabel" disabled/>
          </div>
        </div>
        <div class="btn-wrap">
          <button @click="apply">제출</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/mobile/yeonchon/event";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const step = ref(1)

const name = ref('')
const student_id = ref('')
const phone = ref('')
const picks = reactive({
  first:  { college: 'all', dept: 'all' },
  second: { college: 'all', dept: 'all' },
  third:  { college: 'all', dept: 'all' },
});

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

const getDepts = (collegeVal) => {
  const col = colleges.find(c => c.value === Number(collegeVal));
  return col ? col.depts : [];
};

const firstDepts  = computed(() => getDepts(picks.first.college));
const secondDepts = computed(() => getDepts(picks.second.college));
const thirdDepts  = computed(() => getDepts(picks.third.college));

const isFormValid = computed(() => {
  const basicFilled = name.value !== '' && student_id.value !== '' && phone.value !== ''
  const firstChosen = picks.first.dept !== 'all'
  const secondChosen = picks.second.dept !== 'all'
  const thirdChosen = picks.third.dept !== 'all'

  return basicFilled && firstChosen && secondChosen && thirdChosen
})

const getDeptLabelById = (deptId) => {
  if (deptId === 'all' || deptId == null) return '-';
  const n = Number(deptId);
  for (const col of colleges) {
    const found = col.depts.find(d => d.value === n);
    if (found) return found.label;
  }
  return '-';
};

const firstLabel  = computed(() => getDeptLabelById(picks.first.dept));
const secondLabel = computed(() => getDeptLabelById(picks.second.dept));
const thirdLabel  = computed(() => getDeptLabelById(picks.third.dept));

const isDigits = (s) => {
  if (!s) return false;
  for (const ch of s) { if (ch < '0' || ch > '9') return false; }
  return true;
};

const isHangul = (ch) => {
  const cp = ch.codePointAt(0);
  return (cp >= 0xAC00 && cp <= 0xD7A3) || (cp >= 0x1100 && cp <= 0x11FF) || (cp >= 0x3130 && cp <= 0x318F);
};

const isEnglishLetter = (ch) => {
  const cp = ch.codePointAt(0);
  return (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
};

const isValidName = (s) => {
  if (!s) return false;
  const t = s.trim();
  if (!t.length) return false;
  for (const ch of t) {
    if (!(isHangul(ch) || isEnglishLetter(ch))) return false;
  }
  return true;
};

const isValidPhone = (s) => {
  if (!s || s.length !== 13) return false;
  if (!(s.startsWith('010') && s[3] === '-' && s[8] === '-')) return false;
  const a = s.slice(0, 3), b = s.slice(4, 8), c = s.slice(9, 13);
  return isDigits(a) && isDigits(b) && isDigits(c);
};

const apply = () => {
  const n = name.value.trim();
  const sid = student_id.value.trim();
  const ph = phone.value.trim();

  if (!isValidName(n)) {
    alert('이름은 한글/영문 문자만 입력해주세요.');
    return step.value = 1;
  }
  if (!(sid.length === 10 && isDigits(sid))) {
    alert('학번은 숫자 10자리여야 합니다.');
    return step.value = 1;
  }
  if (!isValidPhone(ph)) {
    alert('전화번호는 010-0000-0000 형식으로 입력해주세요.');
    return step.value = 1;
  }

  const first  = picks.first.dept  !== 'all' ? Number(picks.first.dept)   : null;
  const second = picks.second.dept !== 'all' ? Number(picks.second.dept)  : null;
  const third  = picks.third.dept  !== 'all' ? Number(picks.third.dept)   : null;

  const chosen = [first, second, third];
  if (new Set(chosen).size !== chosen.length) {
    alert('같은 학과(부)를 중복으로 선택할 수 없습니다.');
    return step.value = 1;
  }

  let data = {
    name: name.value,
    student_id: student_id.value,
    phone: phone.value,
    first_place: first,
    second_place: second,
    third_place: third,
  }

  Yeonchon.ApplyEvent(data).then((res) => {
    alert("승부예측 신청이 완료되었습니다.");
    router.push('/yeonchon');
  }).catch((err) => {
    alert(err.response.data.message)
    step.value = 1;
  })
}
</script>