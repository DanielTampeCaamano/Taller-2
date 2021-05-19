import Vue from 'vue'
import VueRouter from 'vue-router'
import Populares from '../views/Populares.vue'
import Peliculas from '../views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/populares',
    name: 'Populares',
    component: Populares
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: Peliculas,
  },
  {
    path: '/mejor-valoradas',
    name: 'MejorValoradas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "mejor-valoradas" */ '../views/MejorValoradas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
