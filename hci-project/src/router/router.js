import { createRouter, createWebHistory } from 'vue-router'
import ScriptedViewCROTO from '@/Views/ScriptedViewCROTO.vue'
import ScriptedView from '@/Views/ScriptedView.vue'
import DeviceView from '@/Views/DeviceView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/scripted',
    },
    {
        path: '/scripted',
        name: 'scripted',
        component:ScriptedView
      },
      {
        path: '/devices',
        name: 'devices',
        component:DeviceView
      },
      {
        path: '/scripted_croto',
        name: 'script croto',
        component:ScriptedViewCROTO
      },
  ]
})

export default router