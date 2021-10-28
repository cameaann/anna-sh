import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WriteMe from '../views/WriteMe.vue'
import Projects from '../views/Projects'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/write',
    name: 'WriteMe',
    component: WriteMe
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
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
