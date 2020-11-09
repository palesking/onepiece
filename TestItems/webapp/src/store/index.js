import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultcity = '兰州'
defaultcity = localStorage.city
export default new Vuex.Store({
  state: {
    cityName:defaultcity
  },
  mutations: {
    changeName(state,cName){
      state.cityName = cName
      localStorage.city = cName
      defaultcity = localStorage.city
    }
  },
  actions: {
  },
  modules: {
  }
})
