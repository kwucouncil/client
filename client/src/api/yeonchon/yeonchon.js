import Send from '@/api/Send.js';

export default {
  getColleges() {
    return Send({
      url: '/sports2025/colleges',
      method: 'get',
    });
  },

  getDeparments() {
    return Send({
      url: '/sports2025/departments',
      method: 'get',
    });
  },

  getSport() {
    return Send({
      url: '/sports2025/sports',
      method: 'get',
    });
  },

  getMatch(data) {
    return Send({
      url: '/sports2025/matches',
      method: 'get',
      data: data
    });
  },

  getRank() {
    return Send({
      url: '/sports2025/standings',
      method: 'get',
    });
  },

  ApplyEvent(data) {
    return Send({
      url: '/predictions',
      method: 'post',
      data: data
    });
  },
}
