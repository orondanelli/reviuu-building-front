import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from './App.vue'

const app = createApp(App)
    .use(ElementPlus)

app.use(createPinia())

app.mount('#app')
