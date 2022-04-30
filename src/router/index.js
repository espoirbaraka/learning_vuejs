import Vue from 'vue'
import VueRouter from 'vue-router'
import MyHome from '../views/MyHome'
import MyAbout from '../views/MyAbout'

Vue.use(VueRouter)

const routes =[
    {
        path: '/',
        name: 'Home',
        component: MyHome
    },
    {
        path: '/about',
        name: 'About',
        component: MyAbout
    }
]

const router = new VueRouter({
    routes
})
export default router