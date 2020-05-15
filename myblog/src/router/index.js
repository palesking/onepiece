import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Content from '../components/Content.vue'
import Section from '../components/Section.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/home',
    name:'Home',
    component:Home,
  },
  {path:"*",redirect:"/home"},
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