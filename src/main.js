import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Helper from '@/utils/Helper.js'
import VCalendar from 'v-calendar';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(VCalendar, {})

// prototype
app.config.globalProperties.$Helper = Helper




// Use plugin with optional defaults