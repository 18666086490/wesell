import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import HelloWorld from "../components/HelloWorld";

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
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

]

const router = new VueRouter({
  routes
})

export default router
