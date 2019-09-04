<template>
  <div class="cinema-list-wrap">
    <ul class="cinema-list">
      <li class="cinema-list-item" v-for="(item,index) in CmList" :key="index">
          <div class="cinema-info">
            <p>{{item.name}}</p>
            <p v-if='item.ticketTypes'>
              <span v-for="(Types) in item.ticketTypes" :key="Types.id">{{Types.name}}</span>
            </p>
            <p>{{item.address}}</p>
          </div>
          <div class="cinema-price">
            <span>¥{{item.lowPrice/100}}起</span>
            <span>距离未知</span>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    CmList: Array
  },
  created() {
    // console.log(this.CmList);
  }
};
</script>
<style scoped lang="scss">
.cinema-list-wrap {
  padding-bottom: 0.98rem;
  .cinema-list {
    padding: 0;
    margin: 0;
    .cinema-list-item {
      background-color: #fff;
      padding: 0.3rem;
      height: 0.9rem;
      border-bottom: 1px solid #ededed;
      color: #ededed;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .cinema-info {
        width: calc(100% - 1.3rem);
        text-align: left;
        padding-right: 0.2rem;
        float: left;
        p {
          color: #191a1b;
          font-size: 0.29rem;
          overflow: hidden;
          max-width: 80%;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(2) {
            color: #797d82;
            font-size: 0.24rem;
            margin-top: 0.2rem;
            span{
              margin-right: 0.2rem;
            }
          }
          &:nth-child(3) {
            color: #797d82;
            font-size: 0.24rem;
            margin-top: 0.2rem;
          }
        }
      }
      .cinema-price {
        width: 1.2rem;
        text-align: center;
        float: right;
        margin-right: -0.1rem;
        span {
          font-size: 0.2rem;
          color: #ff5f16;
          display: block;
          &:nth-child(2) {
            font-size: 0.2rem;
            color: #797d82;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
}
</style>