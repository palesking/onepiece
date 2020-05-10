import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible" 
import Axios from 'axios'
Vue.prototype.Axios = Axios

import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css';
Axios.interceptors.request.use(function (config) {
  // Indicator.open({
  //   text: '加载中...',
  //   spinnerType: 'fading-circle'
  // });
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
  // Indicator.close();
  return response;
}, function (error) {


  return Promise.reject(error);
});
 
import { 
  Tabbar, TabbarItem,Icon,
  Tab, Tabs,
  Swipe, SwipeItem,
  Lazyload,
  Grid, GridItem,
  Card,   // 卡
  Field,  // 登录表单
  Toast,  //轻提示
  Button, //按钮 
  Cell,   //单元格
  CellGroup, //单元格组
  Divider,    //分割线
  Dialog,     //弹出框
  Popup,//弹出层
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar,
  Sidebar,
  SidebarItem, // 侧边导航栏
  Panel   
} from 'vant';


const GoodsList =()=>import('./components/GoodsList')
const Banner =()=>import('./components/Banner')
const Content =()=>import('./components/Content')
const Categoty =()=>import('./components/Categoty')
const NavBarpublic = ()=> import("./components/NavBarpublic")

Vue.component('NavBarpublic',NavBarpublic)
Vue.component('Categoty',Categoty)
Vue.component('Content',Content)
Vue.component('GoodsList',GoodsList)
Vue.component('Banner',Banner)

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Card)
Vue.use(Field);
Vue.use(Toast);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Divider);
Vue.use(Dialog);
Vue.use(Popup );
Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
Vue.use(NavBar);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Panel);
Vue.config.productionTip = false


// router.beforeEach((to,from,next)=>{

// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
