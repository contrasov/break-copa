import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});


export default router;