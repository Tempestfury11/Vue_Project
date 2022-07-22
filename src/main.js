import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Navbar from './components/Navbar.vue'


createApp(App).use(store).use(router).mount('#app')
