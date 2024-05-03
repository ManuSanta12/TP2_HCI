import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/Views/HomeView.vue'
import DeviceView from '@/Views/DeviceView.vue'
import AutomationView from '@/Views/AutomationView'
import EditAutomationView from '@/Views/EditAutomationView'


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
      {
        path: '/automations',
        name: 'automations',
        component:AutomationView
      },
      {
        path: '/editAutomation',
        name: 'editAutomation',
        component:EditAutomationView
      },
  ]
})

export default router