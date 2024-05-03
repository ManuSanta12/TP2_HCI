import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DeviceView from '@/views/DeviceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component:HomeView
      },
      {
        path: '/devices',
        name: 'devices',
        component:DeviceView
      },
  ]
})

export default router