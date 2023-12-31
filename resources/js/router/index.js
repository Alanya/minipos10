import { createWebHistory, createRouter } from "vue-router"
import Store from '../pages/Store.vue'
import Pos from '../pages/Pos.vue'
import Transection from '../pages/Transection.vue'
import Report from '../pages/Report.vue'
import Nopage from '../pages/Nopage.vue'

export const routes = [
    {
        path:'/',
        redirect:'/store'
    },
    {
    name: 'store',
    path: '/store',
    component: Store
    },
    {
    name: 'pos',
    path: '/pos',
    component: Pos
    },
    {
    name: 'transection',
    path: '/transection',
    component: Transection
    },
    {
    name: 'report',
    path: '/report',
    component: Report
    },
    {
    name: 'nopage',
    path: '/:pathMacth(.*)*',
    component: Nopage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0.0)
    }
});

export default router;