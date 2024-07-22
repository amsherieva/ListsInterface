import { createRouter, createWebHistory } from 'vue-router'
import UnselectedView from "@/views/UnselectedView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: UnselectedView
  },
  {
    path: '/levelSelector',
    name: 'logged',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LevelSelectorView.vue')
  },
  {
    path: '/bak',
    name: 'bak',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BakView.vue')
  },
  {
    path: '/mag',
    name: 'mag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MagView.vue')
  },
  {
    path: '/asp',
    name: 'asp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AspView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
