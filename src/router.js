import Vue from 'vue'
import Router from 'vue-router'
import Films from '@/views/films/films'
import NowPlaying from '@/views/films/nowPlaying'
import FilmsDetail from '@/views/films/filmDetail'
import ComingSoon from '@/views/films/comingSoon'
import Cinemas from '@/views/cinemas/cinemas'
import CinemaDetail from '@/views/cinemas/cinemaDetail'
import Active from '@/views/active/active'
import Center from '@/views/center/center'
import City from '@/views/city'
import store from './store'
Vue.use(Router)
//解决路由跳转相同地址报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [{
      path: '/',
      redirect: '/films',
    },
    {
      path: '/films',
      name: 'films',
      component: Films,
      meta: {
        page: 1,
        isNavBar: true
      },
      children: [{
        path: '/films',
        redirect: '/films/nowplaying'
      }, {
        path: 'nowplaying',
        component: NowPlaying,
        meta: {
          page: 1,
          isNavBar: true
        }
      }, {
        path: 'comingSoon',
        component: ComingSoon,
        meta: {
          page: 1,
          isNavBar: true
        }
      }]
    },
    {
      path: '/film/:id',
      name: 'filmsDetail',
      component: FilmsDetail
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: Cinemas,
      meta: {
        page: 2,
        isNavBar: true
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
      meta: {
        page: 4,
        isNavBar: true
      }
    }, {
      path: '/city',
      name: "city",
      component: City
    }, {
      path: '/cinema/:cmId/film',
      name: 'cinemaDetail',
      component: CinemaDetail
    }
  ]
})
let whiteList = ['/center', '/city']
router.beforeEach((to, from, next) => {
  if (whiteList.indexOf(to.path) === -1 && !store.state.cityId) {
    next('/city')
    return
  }
  next()
})
export default router
