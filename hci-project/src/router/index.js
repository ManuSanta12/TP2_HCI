import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../Views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path :'/home',
        name: 'Home',
        component: HomeView
    }
]