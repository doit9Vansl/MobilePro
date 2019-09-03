
const getCityData = {
  getCityId() {
    let cityId = localStorage.getItem('city_id')
    return cityId ? cityId : ''
  },
  setCityId(val) {
    return localStorage.setItem('city_id', val)
  },
  getCityName() {
    let cityName = localStorage.getItem('city_name')
    return cityName ? cityName : ''
  },
  setCityName(val) {
    return localStorage.setItem('city_name', val)
  },
}

export default getCityData