import Send from '@/api/Send.js';

export default {
  getNoticeList() {
    return Send({
      url: 'https://kwu-hoempage-backend.onrender.com/announcements',
      method: 'get',
    });
  },
};
