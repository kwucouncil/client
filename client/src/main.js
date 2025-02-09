import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent)
if (!md.mobile()) {
  require('./scss/desktop/app.scss');
} else {
  require('./scss/mobile/app.scss');
}

const app = createApp(App)
app.use(router)
app.mount('#app')
