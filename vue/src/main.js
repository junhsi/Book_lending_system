import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios';

require("./mock.js")

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')