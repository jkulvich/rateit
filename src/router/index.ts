import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

import DashboardView from '../views/DashboardView.vue'
import StartView from '../views/StartView.vue'
import StoreView from '../views/StoreView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: 'start' }
  },
  {
    path: '/start',
    name: 'start',
    component: StartView
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
