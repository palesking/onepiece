import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
    const store = new Vuex.Store({
        state:{
            num:0
        },
        getters:{

        },
        mutations:{
            addnum(){
                state.num++
            },
            removenum(){
                state.num--
            }
        },
        actions:{
            
        }
    })

export default store