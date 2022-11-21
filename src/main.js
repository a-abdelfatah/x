import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';
import App from './App.vue'
import router from './router.js';

import { createApp } from 'vue'


import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton)

app.use(router);
app.mount('#app')