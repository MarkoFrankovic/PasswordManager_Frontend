import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/korisnik',
    name: 'korisnik',
    component: () => import(/* webpackChunkName: "korisnik" */ '../views/KorisnikView.vue')
  },

  {
    path: '/delete',
    name: 'delete',
    component: () => import(/* webpackChunkName: "delete" */ '../views/DeleteView.vue')
  },

  {
    path: '/specific',
    name: 'specific',
    component: () => import(/* webpackChunkName: "specific" */ '../views/SpecificView.vue')
  },

  {
    path: '/specific_drink',
    name: 'specific_drink',
    component: () => import(/* webpackChunkName: "specific_drink" */ '../views/SpecificDrinkView.vue')
  },

  {
    path: '/upis',
    name: 'upis',
    component: () => import(/* webpackChunkName: "upis" */ '../views/UpisView.vue')
  },

 

  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
