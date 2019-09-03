import Vue from 'vue'
import Vuex from 'vuex'
//引入封装的方法
import getCityData from '@/utils/cityData'
Vue.use(Vuex)
//状态管理中心
export default new Vuex.Store({
  state: {
    cityId:getCityData.getCityId(),  //从localStorage里获取id存在数据中心
    cityName:getCityData.getCityName()  //同上
  },
  mutations: {
    setCityId(state,val){
      state.cityId = val
    },
    setCityName(state,val){
      state.cityName = val
    }
  },
  actions: {

  }
})
