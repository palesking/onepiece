import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from "@/router/index.js"
import store from '@/store/index.js'

//国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

//iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

//element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

const i18n = new VueI18n({
    locale: 'CN',
    messages: {
        en: {
            messages: {
                hello: 'hello world'
            }
        },
        cn: {
            messages: {
                hello: '你好世界'
            }
        }
    }
})

// const i18n = new VueI18n({
//     locale: 'zh',
//     messages: {
//         'zh': require('./common/lang/zh'),
//         'en': require('./common/lang/en')
//     }
// })

new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')
