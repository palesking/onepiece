import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import about from '@/views/about.vue'

const content = () => import ("../components/content.vue")
const section = () => import ("../components/sectionone.vue")
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
      path:'/about',
      name:'about',
      component: about
    },
    {path:'/content/:aid',name:'content',component:content},
    {path:'/section',name:"sectionone",component:section}
  ]

const router = new VueRouter({
    routes
})

export default router
