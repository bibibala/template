import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: {name: 'entry'}
        },
        {
            path: '/Entry',
            name: 'entry',
            component: () => import('../views/entry/index.vue')
        }
    ]
})

export default router
