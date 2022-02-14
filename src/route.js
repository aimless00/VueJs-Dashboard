import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue'



const routes = [
    {
        name: 'Home',
        path: '',
        component: Home,
        children: [
            {
                path: '',
                component: () => import('./components/Dashboard.vue')
            },
            {
                path: '/feedback',
                component: () => import('./components/RouterView/Feedback.vue')
            },
            {
                path: '/companies',
                component: () => import('./components/RouterView/Companies.vue')
            },
            {
                path: '/release',
                component: () => import('./components/RouterView/Release.vue')
            },
            {
                path: '/impact',
                component: () => import('./components/RouterView/Impact.vue')
            },
            {
                path: '/admin',
                component: () => import('./components/RouterView/Admin.vue')
            },
            {
                path: '/user',
                component: () => import('./components/RouterView/User.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;