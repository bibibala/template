import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: 'entry'}
        },
        {
            path: '/entry',
            name: 'entry',
            component: () => import('../views/entry/entryIndex.vue')
        }
    ]
})

export default router
