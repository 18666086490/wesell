import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Control from '../components/control/control.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
    {
      path: '/control',
      name: 'Control',
      component: Control
    }

]

const router = new VueRouter({
  routes
})

export default router
