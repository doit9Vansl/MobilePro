//引入路由，统一处理位置定位
import store from '@/store'
//引入axios
import axios from 'axios'
//创建一个axios实例
const Axios = axios.create({
  //axios的完整请求地址：baseURL+requsestRUL
  baseURL: 'https://m.maizuo.com/',
  timeout: 4000 //最多请求时间4秒 避免一直处于pendding状态

})
//实现请求拦截 interceptors.request.use(config=>{},error=>{})
Axios.interceptors.request.use(config => { //这里的config会携带一些变化的参数的过来；如下面的config.data.xHost
  //统一设置一些在请求中需要携带的参数
  config.headers = {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15670014718602819495825"}',
    'X-Host': config.data.xHost
  }
  //
  if (config.url.indexOf('CITY_ID') !== -1) {
    config.url = config.url.replace('CITY_ID','cityId='+store.state.cityId)
  }
  //把传过来的优变化的参数赋值后销毁
  delete config.data.xHost
  //返回一个完整的请求（此时的请求路径和参数均已完整）
  return config
}, error => {
  //处理请求错误
  return Promise.reject(error)
})

//实现response拦截 interceptors.response.use(response=>{},error=>{})
Axios.interceptors.response.use(response => {
  if (response.data.status !== 0) {
    //如果响应数据中的status不等于0，则请求不成功
    return Promise.reject(new Error(response.message || 'Error'))
  } else {
    //否则直接返回数据
    return response.data
  }
}, error => {
  //处理请求错误
  // Msssage({
  //   message:error.message,
  //   type:'error',
  //   duration:5*1000
  // })
  return Promise.reject(error)
})

export default Axios
