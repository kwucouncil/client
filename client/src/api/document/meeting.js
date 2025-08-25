import Send from '@/api/Send.js';

export default {
  getMeetingList() {
    return Send({
      url: '/minutes',
      method: 'get',
    });
  },
};
