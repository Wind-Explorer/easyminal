// router/index.ts
import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: import('../views/MainView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: import('../views/SettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router