import Send from '@/api/Send.js';

export default {
  getNoticeList() {
    return Send({
      url: '/announcements',
      method: 'get',
    });
  },

  getNoticeDetail(id) {
    return Send({
      url: `/announcements/${id}`,
      method: 'get',
    });
  },
};
