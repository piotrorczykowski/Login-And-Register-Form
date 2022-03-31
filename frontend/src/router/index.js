import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginForm.vue'
import Register from '../views/RegisterForm.vue'
import Home from '../views/HomePage.vue'
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
            console.log(to)

            //  Check if token exists
            if(!localStorage.getItem('token')) {
                //  Move to login page
                next(from)
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
                next(from)
            } 
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router