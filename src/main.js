//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
//bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
