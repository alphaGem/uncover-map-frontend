import {createRouter, createWebHashHistory} from 'vue-router'
import InfoList from '@/views/InfoList.vue'
import InfoPage from '@/views/InfoPage.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import SuggestDoctor from '@/views/SuggestDoctor.vue'

const routes = [
    {
        path: '/',
        name: 'InfoList',
        component: InfoList,
        meta: {title: "友善信息库"}
    },
    {
        path: '/detail/:id',
        name: 'InfoPage',
        component: InfoPage,
        meta: {title: "友善信息库"}
    },
    {
        path: '/:catchAll(.*)',
        name: 'PageNotFound',
        component: PageNotFound,
        meta: {title: "友善信息库"}
    },
    {
        path: '/suggest',
        name: 'SuggestDoctor',
        component: SuggestDoctor,
        meta: {title: "友善信息库"}
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes: routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})

export default router
