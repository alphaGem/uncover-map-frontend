import {createRouter, createWebHashHistory} from 'vue-router'
import InfoList from '@/views/InfoList.vue'
import InfoPage from '@/views/InfoPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'

const routes = [
    {
        path: '/',
        name: 'InfoList',
        component: InfoList
    },
    {
        path: '/detail/:id',
        name: 'InfoPage',
        component: InfoPage
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound
    },
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
