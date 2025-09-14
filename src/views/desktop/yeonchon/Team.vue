<template>
  <div class="container">
    <div class="yeonchon-detail-banner-wrap">
      <img src="@/assets/imgs/desktop/yeonchon/banner/team.svg" alt="참여 팀" />
    </div>
    <div class="team-wrap">
      <div class="team" v-for="college in collegeList" :key="college.id">
        <div class="college">{{ college.name }}</div>
        <div class="dep-wrap">
          <div class="dep" v-for="dep in deparmentsList.filter(d => d.college_id === college.id)" :key="dep.id">
            <img :src="dep.logo_url_embed" :alt="dep.name">
            <div class="title">{{ dep.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/scss/desktop/yeonchon/team";
</style>

<script setup>
import Yeonchon from '@/api/yeonchon/yeonchon';
import { ref } from 'vue';
const collegeList = ref([])
const deparmentsList = ref([])

const getColleges = () => {
  Yeonchon.getColleges().then((res) => {
    collegeList.value = res.data.colleges
  }).catch((err) => {
    console.log(err)
  })
};

const getDeparments = () => {
  Yeonchon.getDeparments().then((res) => {
    deparmentsList.value = res.data.departments
  }).catch((err) => {
    console.log(err)
  })
};

getColleges()
getDeparments()
</script>