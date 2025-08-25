import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Helper from '@/utils/Helper.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

// prototype
app.config.globalProperties.$Helper = Helper