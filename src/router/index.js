import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Counter from '../views/Counter.vue'

Vue.use(VueRouter)

let isAuthenticated = true

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: function (from, to, next) {
      console.log('[Before enter in home]')
      if (isAuthenticated) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/counter',
    name: 'counter',
    component: Counter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((from, to, next) => {
//   console.log('[Before enter in route]')
//   next()
// })

export default router
