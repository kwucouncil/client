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
}
