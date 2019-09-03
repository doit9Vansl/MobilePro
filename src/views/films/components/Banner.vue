<template>
  <div class="bannerBox">
    <van-swipe :autoplay="3000" indicator-color="white" class="banner-wrap">
      <van-swipe-item v-for="item in BList" :key="item.bannerId">
        <img :src="item.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="city-fixed" @click="$router.push('/city')">
      <span>{{$store.state.cityName}}</span>
      <van-icon name="arrow-down"/>
    </div>
  </div>
</template>
<script>
import requestData from "@/api/films";
export default {
  data() {
    return {
      BList: []
    };
  },
  methods: {
    getBannerData() {
      requestData.getBanner().then(result => {
        // console.log(result);
        if (result.status == 0) {
          this.BList = result.data;
        }
      });
    }
  },
  mounted() {
    this.getBannerData();
  }
};
</script>
<style scoped lang="scss">
.bannerBox {
  position: relative;
  height: auto;
}
.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}
.banner-wrap img {
  width: 100%;
}
.city-fixed {
  position: absolute;
  top: 0.36rem;
  left: 0.14rem;
  color: #fff;
  z-index: 13;
  font-size: 0.36rem;
  background: rgba(0, 0, 0, 0.2);
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  text-align: center;
  padding: 0  0.1rem;
  span{
    font-size: 0.26rem;
  }
  i{
    margin-left:0.1rem;
    font-size: 0.2rem;
  }
}
</style>