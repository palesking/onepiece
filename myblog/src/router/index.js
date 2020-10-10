import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index.vue'
// import about from '@/views/about.vue'

const content = () => import ("@/components/content.vue")
const section = () => import ("@/components/sectionone.vue")
Vue.use(VueRouter)

  const routes = [
    {
        path : '/',
        redirect : index
    },
    {
        path:'/index',
        name:'index',
        component:index,
        children:[
            {
                path:'/version',
                name:'version',
                component:()=>import('@/views/version.vue')
            },
            {
                path:'/movie',
                name:'movie',
                component:()=>import('@/views/movie.vue')
            },
            {
                path:'/about',
                name:'about',
                component: () =>import('@/views/about.vue')
            },
            {
                path:'/community',
                name:'community',
                component:()=>import('@/views/community.vue')
            },
            {
                path:'/music',
                name:'music',
                component: ()=>import('@/components/music.vue')
            },
            {
                path:'/index',
                name: 'index',
                component: ()=>import('@/components/contentone/index.vue'),
                // children: [
                //     {
                //         path: '/detailsone',
                //         name: 'detailsone',
                //         component: ()=>import('@/components/details/index.vue')
                //     }
                // ]
            },
            {
                path: '/detailsone',
                name: 'detailsone',
                component: ()=>import('@/components/details/index.vue')
            },
            {
                path: '/moviecontent',
                name: 'moviecontent',
                component: ()=>import('@/views/moviecontent.vue')
            }
        ]
    },
    
    {path:'/content/:aid',name:'content',component:content},
    {path:'/section',name:"sectionone",component:section}
  ]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
