import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      enterClass:"animate__animated animate__fadeInLeft",
      leaveClass:"animate__animated animate__fadeOutRight"

    }
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      enterClass:"animate__animated animate__fadeInRight",
      leaveClass:"animate__animated animate__fadeOutLeft"
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
