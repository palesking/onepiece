import Vue from 'vue'
import VueRouter from 'vue-router'

//引入一级路由组件
const Home = ()=>import('../views/Home/index')
const Chat = ()=>import('../views/Chat/index')
const Cart = ()=>import('../views/Cart/index')
const Recomend = ()=>import('../views/Recomend/index')
const Search = ()=>import('../views/Search/index')
const User = ()=>import('../views/User/index')
const Notfount = ()=>import('../views/Notfount/index')
const GoodsBuy = ()=>import('../views/GoodsBuy/index')
const GoodsList = ()=>import('../components/GoodsList')
  const contents = ()=>import("../views/Search/contents.vue")

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name:"home",
    component:Home
  },
  {
    path:"/chat",
    name:"chat",
    component:Chat
  },
  {
    path:"/recomend",
    name:"recomend",
    component:Recomend
  },
  {
    path:"/search",
    name:"search",
    component:Search,
    children:[
      {path:'contents',name:'contents',component:contents},
      
    ]
  },
  {
    path:"/user",
    name:"user",
    component:User
  },
  {
    path:"/cart",
    name:"cart",
    component:Cart
  },
  {
    path:"/goodsbuy",
    name:"goodsbuy",
    component:GoodsBuy
  },
  {
    path:"/goodslist",
    name:"goodslist",
    component:GoodsList
  },
  {
    path:"*",
    component:Notfount
  }
]

const router = new VueRouter({
  routes
})

export default router
