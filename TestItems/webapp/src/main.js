import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//重置样式 ==> reset.css
import './assets/css/reset.css'
//fastClick ==> 解决移动端Click事件300ms延迟问题
import FastClick from 'fastclick'
FastClick.attach(document.body)
//引入字体图标
import './assets/css/iconfont.css'
//引入适配font.js文件
import './assets/js/font.js'
//引入vue-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import './assets/css/swiper.min.css'
//引入animate.css
import animate from 'animate.css'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
