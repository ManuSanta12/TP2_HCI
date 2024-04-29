import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import DeviceView from '../Views/DeviceView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home' // Redirect to the home page by default
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/devices',
        name: 'Devices',
        component: DeviceView
    }
]

const router = new VueRouter({
    routes
  })
  
  export default router