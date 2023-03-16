import '@/assets/index.pcss';
import { createApp } from 'vue'
import { registerSW } from 'virtual:pwa-register';
import router from '@/router';
import App from '@/App.vue';
import store from '@/store';

createApp(App).use(router).use(store).mount('#app')
registerSW();
