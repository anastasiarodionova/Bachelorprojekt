import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './server/routes'
import './assets/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
