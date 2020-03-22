import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '@pages/home/router'
import urserRouter from '@pages/user/router'

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: homeRouter.path
    },
    homeRouter, 
    urserRouter
]

export const menus = routes.reduce((acc, route) => {
    if (!route.redirect && route.label) {
        acc.push({
            label: route.label,
            path: route.path
        })
    }
    return acc;
}, []);

export default new Router({
    mode: 'history',
    routes
})
