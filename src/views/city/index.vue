<template>
  <div>
    <van-sticky>
      <city-hd :cityName="gpsCityName"></city-hd>
      <city-sc @getV="getSearchValue"></city-sc>
    </van-sticky>
    <get-city v-show="false" @gitCityName="selectCity"></get-city>
    <city-index
      v-if="cityList.length"
      :indexes="indexes"
      :cityList="cityList"
      :dataList="lastCityData"
      @changeCity="againSelectCity"
    ></city-index>
  </div>
</template>
<script>
import CityHd from "./components/cityHeader";
import CitySc from "./components/search";
import CityIndex from "./components/indexBar";
import getCity from "@/components/getCity";
import getCityData from "@/utils/cityData";
import { setCityId, setCityName } from "@/utils/cityData";
import { getCityList } from "@/api/city";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      cityList: [],
      gpsCityName: "", //定位城市名
      gpsCityId: "",
      indexes: [], //城市首字母
      searchV: null,
    };
  },
  computed: {
    //该计算属性作为分类好了的对象传给子组件
    lastCityData() {
      //存放所有的城市，下面的代码让其按首字母分类{A:[首字母为A的省份的全部数据],B:[...]}
      //k为键，分类出来的省份数组为值，呈键值对
      let result = {};
      this.cityList.forEach(item => {
        //定义一个变量接收每个省份的首字母
        let k = item.pinyin.charAt(0).toUpperCase();
        //从result里判断这个键值对是否存在，如果不存在，就创建一个以一个该首字母为键，值为空的键值对
        if (!result[k]) {
          result[k] = [];
          this.indexes.push(k); //把全部首字母存入数据
        }
        result[k].push(item);
      });
      this.indexes.sort(); //根据首字母排序
      return result;
    }
  },
  components: {
    CityHd, //头部
    CitySc, //搜索
    CityIndex, //index索引
    getCity //只为了子传父数据，把子组件里获取到的城市名传到父组件
  },
  methods: {
    ...mapMutations(["setCityId", "setCityName"]),
    selectCity(city) {
      // console.log(city);
      this.gpsCityName = city; //把获取到的城市名字存起来
      //获取到以后在调用获取id的方法
      this.getCityIdByName();
      //等待id也获取到以后在调用此方法
      this.setCity(this.gpsCityId, this.gpsCityName);
    },
    getCityData() {
      getCityList().then(result => {
        if (result.status == 0) {
          //把所有城市的数据保存到citylist
          this.cityList = result.data.cities;
          // console.log(this.cityList);
        }
      });
    },
    //根据城市名找到对应的城市id
    getCityIdByName() {
      //不用forEach的原因：forEach是不管数有没有找到，都会把循环执行完，所以耗性能
      for (var i = 0; i < this.cityList.length; i++) {
        if (this.gpsCityName == this.cityList[i].name) {
          this.gpsCityId = this.cityList[i].cityId;
          break;
        }
      }
    },
    setCity(id, name) {
      //存入localStorage
      getCityData.setCityId(id);
      getCityData.setCityName(name);
      //存到vuex
      this.setCityId(id);
      this.setCityName(name);
    },
    //当更改位置以后，再重新调用上面这个方法，重新存一次位置
    againSelectCity(cityId, cityName) {
      this.setCity(cityId, cityName);
      this.$router.push("/films");
    },
    getSearchValue(val) {
      this.searchV = val;
      console.log(this.searchV);
    },
  },
  created() {
    this.getCityData();
    this.$toast.loading({ message: "正在定位中", duration: 1500 });
  }
};
</script>
