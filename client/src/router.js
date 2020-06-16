import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Songs from '@/components/Songs.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'root',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
