import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: require('../pages/index/hello')
    }, {
        path: '/main',
        component: require('../pages/main'),
        children: [
            {
                path: 'own',
                component: require('../components/own')
            },
            {
                path: 'online',
                component: require('../components/online'),
                children: [
                    {
                        path: 'personal',
                        component: require('../components/personal')
                    },
                    {
                        path: 'songsheet',
                        component: require('../components/song_sheet')
                    },
                    {
                        path: 'rank',
                        component: require('../components/rank')
                    },
                    {
                        path: '',
                        component: require('../components/personal')
                    },
                    {
                        path: '404',
                        component: require('../components/404')
                    }
                ]
            },
            {
                path: 'talk',
                component: require('../components/talk')
            },
            {
                path: '',
                component: require('../components/own')
            }
        ]
    }, {
        path: '/',
        component: require('../pages/index/hello')
    },
    {
        path: '/song',
        component: require('../components/song')
    },
    {
        path: '/localmusic',
        component: require('../pages/localMusic')
    },
    {
        path: '/myradio',
        component: require('../pages/myRadio')
    },
    {
        path: '/recentMusic',
        component: require('../pages/recentMusic')
    }
    ]
})
