const Filters = {
  // 格式化演员
  getActors(value) {
    if (!value) return "暂无主演"
    let str = ''
    value.forEach((item, index) => {
      let space = ' '
      if (index == value.length - 1) {
        space = ''
      }
      str += item.name + space
    });
    return str
  },

  // 格式化上演日期 周x 8月30日
  getPremiereAt(value, format) {
    let time = value * 1000
    let date = new Date(time)
    if (format === 'ymd') { 
      return date.toLocaleDateString()
    }
    let str = ''
    let weeks = ['周天', '周一', '周二', '周三', '周四', '周五', '周六']
    str += weeks[date.getDay()] + ' '
    str += (date.getMonth() + 1) + '月'
    str += date.getDate() + '日'
    return str
  }
}

export default Filters
