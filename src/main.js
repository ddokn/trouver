import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/style.scss'
import '@/assets/fonts/font.css'



createApp(App).use(router).use(store).mount('#app')
