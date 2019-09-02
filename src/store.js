import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//状态管理中心
export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    addNum(state, val) {
      state.num += val
    },
    reduceNum(state,val){
      state.num -= val
    }
  },
  actions: {

  }
})
