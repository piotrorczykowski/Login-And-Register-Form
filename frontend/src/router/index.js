import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'
import Home from '../views/HomePage.vue'
import NonAuth from '../views/NonAuth.vue'
import axios from '../axios'

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
    },
    {
        path: '/homepage',
        name: 'Home',
        component: Home,
        beforeEnter: async (to, from, next) => {
            //  Check if token exists
            if(!localStorage.getItem('token')) {
                //  Move to login page
                next('NonAuth')
            }

            // Try verifying token
            try {
                await axios.get('/auth', { 
                    headers: { 
                        authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }
                    ).then(res => {
                        //  Save name from jwt to local storage
                        localStorage.setItem('firstName', res.data.data.firstName)

                        //  Move to homepage
                        next()
                    })

            } catch (err) {
                console.log(err.response.message)
                //  Move to login page
                next(NonAuth)
            } 
        }
    },
    {
        path: '/nonAuth',
        name: 'NonAuth',
        component: NonAuth
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router