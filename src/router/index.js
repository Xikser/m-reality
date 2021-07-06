import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/GeneralViews/Home.vue')
  },
  {
    path: '/homes',
    name: 'Homes',
    component: () => import('../components/Views/Homes/HomeList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'abstract'
})

export default router
