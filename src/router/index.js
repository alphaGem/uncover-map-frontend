import {createRouter, createWebHashHistory} from 'vue-router'
import InfoList from '@/views/InfoList.vue'
import InfoPage from '@/views/InfoPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import SuggestDoctor from '@/views/SuggestDoctor.vue'

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
    {
        path: '/suggest',
        name: 'SuggestDoctor',
        component: SuggestDoctor
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
