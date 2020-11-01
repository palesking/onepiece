import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// import home from '@/views/index/index.vue'
// import about from '@/views/about.vue'
// const content = () => import ("@/components/content.vue")
// const section = () => import ("@/components/sectionone.vue")
// const index = ()=> import('@/views/index/index.vue');

    const routes = [
        {
            path : '/',
            redirect : '/home'
        },
        {
            path:'/home',
            name:'home',
            component:()=>import('@/views/index/index.vue'),
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
                    component:()=>import('@/views/community/community.vue')
                },
                {
                    path:'/music',
                    name:'music',
                    component: ()=>import('@/components/music.vue')
                },
                {
                    path:'/index',
                    name: 'index',
                    component: ()=>import('@/components/contentone/index.vue')
                },
                {
                    path: '/detailsone/:id',
                    name: 'detailsone',
                    component: ()=>import('@/components/details/index.vue')
                },
                {
                    path: '/moviecontent',
                    name: 'moviecontent',
                    component: ()=>import('@/views/moviecontent.vue')
                },
                {
                    path: '/vueone',
                    name: 'vueone',
                    component: ()=>import('@/views/community/vue/vueone.vue')
                }
            ]
        },
        // {path:'/content/:aid',name:'content',component:content},
        // {path:'/section',name:"sectionone",component:section}
    ]


  
    // var dynamicRouter=null//用来获取后台拿到的路由 
    // var getLastUrl=(str,yourStr)=>str.slice(str.lastIndexOf(yourStr))//取到浏览器出现网址的最后"/"出现的后边的字符
    // //如果开始跳转
    // router.beforeEach(function (to, from, next) {
    // // let routerCache=
    // let lastUrl=getLastUrl(window.location.href,'/');
    // let routerUrls=StorageUtils.getSessionItem("routerUrls");
    // //如果GoingUtils.templateObj["jumpLoadFlag"]为null 则表示是界面刷新
    // if(AssertUtils.isNotEmpty(routerUrls)&&!AssertUtils.isNotNull(GoingUtils.templateObj["jumpLoadFlag"])){
    // if(!dynamicRouter){
    //     let routerUrlsAry=routerUrls.split(';');
    //     //如果当前连接在url中存在 则表示该跳转是需要动态加载的
    //     if(ArrayUtils.aryContains(routerUrlsAry,lastUrl)){
    //     dynamicRouter=DynamicRouterUtils.getRouterByUrl(lastUrl,UnitTabSetHomePage,router);
    //     next({ ...to, replace: true })
    //     }
    // } else {
    //     next();
    // }
    // }
    // //如果是配置了缓存路径的 则进行缓存 如果没有配置缓存则直接跳转
    // if(routerCache.includes(to.name)||routerCache.includes(to.path)){
    //     to.meta.keepAlive = true;
    // }else{
    //     to.meta.keepAlive = false;
    // }
    // //显示loading提醒
    // store.commit('updateLoadingStatus', {isLoading: true});
    // //如果是进入到login界面 相应先查询登录配置信息

    // if (to.name === "login"||to.name==='loginUrl') {
    //     if (!store.state.vux.loginInfo) {
    //     //加载当前用户的登录界面设计信息
    //     store.dispatch($A('loadCurGroupLoginDes', "LoginStore"), {
    //         backFun: function () {
    //         store.commit('updateLoginState', {});
    //         next()
    //         }
    //     });
    //     } else {
    //     next()
    //     }
    // } else {
    //     next();
    // }
    // })
    const router = new VueRouter({
        mode: 'history',
        routes
    })

export default router
