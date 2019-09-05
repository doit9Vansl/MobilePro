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

//影院详情
export const getCmDetail = (id) => {
  return Axios({
    url: `gateway/?cinemaId=${id}&k=4965443`,
    data: {
      xHost: 'mall.film-ticket.cinema.info'
    }
  })
}

//影院电影
export const getCmFilms = (id) => {
  return Axios({
    url: `gateway/?cinemaId=${id}&k=4965443`,
    data: {
      xHost: 'mall.film-ticket.film.cinema-show-film'
    }
  })
}