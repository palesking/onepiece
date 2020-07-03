import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home.vue'
import About from '../views/About.vue'
// import Content from '../components/Content.vue'
// import Section from '../components/Section.vue'

const Content = () => import ("../components/Content.vue")
const Section = () => import ("../components/Section.vue")
// const About = () => import ("../views/About.vue")
Vue.use(VueRouter)

  const routes = [
    {
      path : '/',
      redirect : home
    },
    {
      path:'/home',
      name:'home',
      component:home,
    },
    {
      path:'/about',
      name:'About',
      component: About
    },
    {path:'/content/:aid',name:'Content',component:Content},
    {path:'/section',name:"Section",component:Section}
  ]

const router = new VueRouter({
    routes
})

export default router
