import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Registration from '../views/RegistrationForm.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router