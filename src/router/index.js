import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects'

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
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta:{
      enterClass:"animate__animated animate__fadeInRight",
      leaveClass:"animate__animated animate__fadeOutLeft"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
