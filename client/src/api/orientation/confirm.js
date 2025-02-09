import Send from '@/api/Send.js'

export default {
  confirm(data) {
    return Send({
      method: 'post',
      url: '/api',
      data: data,
    })
  },
}
