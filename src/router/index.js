// 导入 Vue Router 相关函数
import { createRouter, createWebHistory } from 'vue-router';

// 使用懒加载方式导入组件
const Home = () => import('../views/Home.vue');
const Users = () => import('../views/Users.vue');
const Index = () => import('../views/Index.vue');
const Login = () => import('../views/Login.vue');
const Logout = () => import('../views/Logout.vue');

// 定义路由
const listRoutes = [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    { path: '/users/:id/:username', component: Users, name: 'users' },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout }
];

// 创建并配置路由器
const routes = [
    ...listRoutes
];

// 创建并配置路由器
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 导出路由器
export default router;
