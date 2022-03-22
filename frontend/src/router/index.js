import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router