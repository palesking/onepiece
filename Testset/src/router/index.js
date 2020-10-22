import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import testone from '@/components/testone.vue'
import home from '@/views/HelloWorld.vue'
import news from '@/views/News.vue'
import routerone from '@/components/routerone.vue'
import content from "@/views/content.vue"
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'/home',
        name:'home',
        component:home
    },
    {path:"*",redirect:"/home"},
    {
        path: '/news',
        name: 'news',
        component: news
    },
    {
        path: "/content/:id",
        name: 'content',
        component: content
    }
    // {
    //     path: '/user',
    //     name: 'user',
    //     component: ()=>import('@/components/user.vue')
    // },
    // {
    //     path: '/usertwo',
    //     name: 'usertwo',
    //     component: ()=>import('@/components/usertwo.vue')
    // }   
    // {
    //     path:"/testone",
    //     name:'testone',
    //     component: testone
    // },
    
]

var router =  new VueRouter({
    mode: 'history',  //去掉url中的#
    routes
})
// router.beforeEach((to,from,next)=>{
//     if(to.name === 'home'){
//         next()
//     }else if(to.name === 'user'){
//         next()
//     }else{
//         next(false)
//     }
// })
export default router;