<template>
  <van-swipe :autoplay="3000" indicator-color="white" class="banner-wrap">
    <van-swipe-item v-for="item in BList" :key="item.bannerId">
      <img :src="item.imgUrl" />
    </van-swipe-item>
  </van-swipe>
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
<style scoped>
.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}
.banner-wrap img {
  width: 100%;
}
</style>