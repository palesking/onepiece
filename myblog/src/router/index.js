import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index/index.vue'
import about from '@/views/about.vue'

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
    },
    {
      path:'/version',
      name:'version',
      component:()=>import('@/views/version')
    },
    {
      path:'/movie',
      name:'movie',
      component:()=>import('@/views/movie')
    },
    {
      path:'/about',
      name:'about',
      component: about
    },
    {
      path:'/community',
      name:'community',
      component:()=>import('@/views/community')
    },
    {
      path:'/music',
      name:'music',
      component: ()=>import('@/components/music')
    },
    {path:'/content/:aid',name:'content',component:content},
    {path:'/section',name:"sectionone",component:section}
  ]

const router = new VueRouter({
    base: './',
    mode: 'history',
    routes
})

export default router
