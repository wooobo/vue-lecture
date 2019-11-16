import Vue from 'vue'
import VueRouter from 'vue-router'
import TrafficLightView from '../views/TrafficLightView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/traffic-light',
    name: 'TrafficLight',
    component: TrafficLightView
  },
  {
    path: '/clock',
    name: 'Clock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "clock" */ '../views/ClockView.vue')
  },
  {
    path: '/counting',
    name: 'CountingView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "counting" */ '../views/CountingView.vue')
  },
  ,
  {
    path: '/menu',
    name: 'Menu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "menu" */ '../views/MenuView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
