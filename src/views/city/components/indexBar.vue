<template>
  <!-- 把默认索引值设置成组件中的索引 -->
  <div>
    <div class="recommend-city">
      <div class="gprs-city">
        <div class="city-index-title">GPS定位你所在城市</div>
        <ul class="city-index-detail">
          <li class="city-item-detail" @click="$router.push('/')">
            <gps-city v-if="city" class="city-item-text" @gitCityName="gitCityName"></gps-city>
            <div class="city-item-text" v-else>{{$store.state.cityName}}</div>
          </li>
        </ul>
      </div>
      <div class="hot-city">
        <div class="city-index-title">热门城市</div>
        <ul class="city-index-detail">
          <li class="city-item-detail" v-for="(item) in getHotCity" :key="item.name" @click="$emit('changeCity',item.cityId,item.name)">
            <div class="city-item-text">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <van-index-bar :index-list="indexes">
      <template v-for="(char,index) in indexes">
        <van-index-anchor :index="char" :key="index" />
        <!-- 从对象里取到和上面的char所对应的值 -->
        <van-cell
          :title="one.name"
          v-for="(one) in dataList[char]"
          :key="one.cityId"
          @click="$emit('changeCity',one.cityId,one.name)"
        />
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import gpsCity from "@/components/getCity";
export default {
  props: {
    dataList: Object, //分类过后的城市数据
    indexes: Array, //分类好的首字母
    cityList: Array //未分类的城市数据
  },
  computed: {
    //获取热门城市
    getHotCity() {
      let hotCiyt = [];
      this.cityList.forEach(item => {
        if (item.isHot === 1) {
          hotCiyt.push(item);
        }
      });
      return hotCiyt;
    }
  },
  data() {
    return {
      city: null
    };
  },
  components: {
    gpsCity
  },
  methods: {
    gitCityName(val) {
      this.city = val;
    }
  },
  created() {
    this.gitCityName();
  }
};
</script>
<style scoped lang="scss">
.recommend-city {
  background-color: #fff;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  .gprs-city {
    .city-index-title {
      font-size: 0.26rem;
      color: #797d82;
      margin-bottom: 0.2rem;
    }
    .city-index-detail {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      .city-item-detail {
        width: calc((100vw - 0.66rem) / 3);
        text-align: center;
        padding-bottom: 0.3rem;
        box-sizing: border-box;
        float: left;
        .city-item-text {
          height: 0.6rem;
          background-color: #f4f4f4;
          line-height: 0.6rem;
          border-radius: 0.06rem;
          box-sizing: border-box;
          margin: 0 0.15rem;
          font-size: 14px;
          color: #191a1b;
        }
      }
    }
  }
  .hot-city {
    .city-index-title {
      font-size: 0.26rem;
      color: #797d82;
      margin-bottom: 0.2rem;
    }
    .city-index-detail {
      display: flex;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: wrap;
      .city-item-detail {
        width: calc((100vw - 0.66rem) / 3);
        text-align: center;
        padding-bottom: 0.3rem;
        box-sizing: border-box;
        float: left;
        .city-item-text {
          height: 0.6rem;
          background-color: #f4f4f4;
          line-height: 0.6rem;
          border-radius: 0.06rem;
          box-sizing: border-box;
          margin: 0 0.15rem;
          font-size: 0.28rem;
          color: #191a1b;
        }
      }
    }
  }
}
</style>