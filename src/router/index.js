import {createRouter, createWebHistory} from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
// import Users from '../views/Users.vue'
const Users = () => import('../views/Users.vue')
const Home =() => import('../views/Home.vue')

const routers = [
    {path: '/', component: Index},
    {path: '/home', component: Home},
    {path: '/users/:id/:username', component: Users,name: "users"},
    
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router