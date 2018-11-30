import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Albums from './views/Albums.vue'
import ImageItem from './components/images/ImageItem.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/albums',
            name: 'albums',
            component: Albums
        },
        {
            path: '/albums/:category/:num',
            name: 'album',
            component: ImageItem
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})