import Axios from '@/utils/Axios'
// 获取影院的数据
export const getCmList = (e) => {
  return Axios({
    url: `gateway?CITY_ID&ticketFlag=${e}&k=2382400`,
    data: {
      xHost: 'mall.film-ticket.cinema.list'
    }
  })
}