import { createRouter, createWebHistory } from 'vue-router';

import RegisterPage from './view/RegisterPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: RegisterPage, component: '/RegisterPage' },
        
    ],
});


export default router;

