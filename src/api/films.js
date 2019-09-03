//引入拦截器
import Axios from '@/utils/Axios'
//定义一个对象存放所有film页面的请求
const requestData = {
  //banner图请求接口
  getBanner() {
    return Axios({
      url: "gateway?type=2&CITY_ID&k=1278907",
      data: {
        xHost: "mall.cfg.common-banner"
      }
    })
  },

  //NowPlaying请求接口
  getNowPlaying(query) {
    // console.log(query)
    // return; 
    let url = `gateway?CITY_ID&pageNum=${query.pageNum}&pageSize=${query.pageSize}&type=${query.type}&k=7287648`
    return Axios({
      url,
      data: {
        xHost: 'mall.film-ticket.film.list',
      }
    })
  },

  //电影详情页的请求接口
  getDetail(id) {
    let url = `gateway?filmId=${id}&k=5262341`
    return Axios({
      url,
      data: {
        xHost: 'mall.film-ticket.film.info',
      }
    })
  }
}

export default requestData
