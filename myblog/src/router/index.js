import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/index.vue'
import About from '../views/About.vue'
// import Content from '../components/Content.vue'
// import Section from '../components/Section.vue'

const Content = () => import ("../components/Content.vue")
const section = () => import ("../components/sectionone.vue")
// const About = () => import ("../views/About.vue")
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
      name:'About',
      component: About
    },
    {path:'/content/:aid',name:'Content',component:Content},
    {path:'/section',name:"sectionone",component:section}
  ]

const router = new VueRouter({
    routes
})

export default router
