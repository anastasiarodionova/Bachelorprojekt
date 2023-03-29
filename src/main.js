import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './server/routes'

createApp(App).use(router).mount('#app')
