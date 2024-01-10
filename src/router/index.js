import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const Users = () => import('../views/Users.vue');
const Index = () => import('../views/Index.vue');

const routes = [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/users/:id/:username', component: Users, name: 'users' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
