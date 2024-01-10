// 导入 Vue Router 相关函数
import { createRouter, createWebHistory } from 'vue-router';

// 使用懒加载方式导入组件
const Home = () => import('../views/Home.vue');
const Users = () => import('../views/Users.vue');
const Index = () => import('../views/Index.vue');

// 定义路由
const routes = [
    { path: '/', component: Index },
    { path: '/home', component: Home },
    {
        path: '/users/:id/:username',
        component: Users,
        name: 'users',
        beforeEnter: (to, from, next) => {
            console.log(to.params); // 打印路由参数

            // 检查参数id是否为'1'
            if (to.params.id === '1') {
                next(); // 如果是'1'，继续导航
            } else {
                next('/'); // 否则，重定向到首页
            }
        }
    }
];

// 创建并配置路由器
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 导出路由器
export default router;
