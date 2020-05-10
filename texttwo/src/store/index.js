import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import shoptool from '../untils/shoptool'

export default new Vuex.Store({
  state: {

  },
  getters:{
    getGoodsData(){
      return shoptool.getShop()
    }
  },
  mutations: {
    AddTocart(state,payload){
      //console.log(state,payload)
      shoptool.addUpdate(payload)
    }

  },
  actions: {
  }
})
