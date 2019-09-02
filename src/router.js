import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/views/films/films'
import NowPlaying from '@/views/films/nowPlaying'
import FilmsDetail from '@/views/films/filmDetail'
import ComingSoon from '@/views/films/comingSoon'
import Cinemas from '@/views/cinemas/cinemas'
import Active from '@/views/active/active'
import Center from '@/views/center/center'
Vue.use(Router)
//解决路由跳转相同地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [{
      path: '/',
      redirect: '/films',
    },
    {
      path: '/films',
      name: 'films',
      component: Films,
      meta:{
        isNavBar:true
      },
      children: [{
        path: '/films',
        redirect: '/films/nowplaying'
      }, {
        path: 'nowplaying',
        component: NowPlaying,
        meta:{
          isNavBar:true
        }
      }, {
        path: 'comingSoon',
        component: ComingSoon,
        meta:{
          isNavBar:true
        }
      }]
    },
    {
      path: '/film/:id',
      name:'filmsDetail',
      component: FilmsDetail
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: Cinemas,
      meta:{
        isNavBar:true
      }
    },
    {
      path: '/active',
      name: 'active',
      component: Active
    },
    {
      path: '/center',
      name: 'center',
      component: Center,
      meta:{
        isNavBar:true
      }
    }
  ]
})
