import Send from '@/api/Send.js';

export default {
  confirm(data) {
    return Send({
      method: 'post',
      url: 'https://backend-pi-nine-35.vercel.app/api',
      data: data,
    });
  },
};
