import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
// import testone from '@/components/testone.vue'
import home from '@/components/home'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path: '/user',
        name: 'user',
        component: ()=>import('@/components/user.vue')
    },
    {
        path: '/usertwo',
        name: 'usertwo',
        component: ()=>import('@/components/usertwo.vue')
    }   
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
router.beforeEach((to,from,next)=>{
    if(to.name === 'home'){
        next()
    }else if(to.name === 'user'){
        next()
    }else{
        next(false)
    }
})
export default router;