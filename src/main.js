import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import router from '@/router'
import store from '@/store'
//引入vantUi框架
import { Swipe, SwipeItem,List,Sticky,Icon,Search,IndexBar, IndexAnchor,Cell,Dialog,Toast } from 'vant';
//注入Vue
Vue.use(Swipe).use(SwipeItem).use(List).use(Sticky).use(Icon).use(Search).use(IndexBar).use(IndexAnchor).use(Cell).use(Dialog).use(Toast);
//引入全局filter函数
import Filter from '@/filter'
//定义全局过滤器
for(var i in Filter){
  Vue.filter(i,Filter[i])
}
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
