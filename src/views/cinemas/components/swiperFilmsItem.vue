<template>
  <div class="cmDetail">
    <div class="bgImg" style="background-image:url('')"></div>
    <div class="swiper-container" id="cmDetail">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item) in films" :key="item.filmId">
          <img :src="item.poster" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["films"],
  data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    swiperMove() {
      var _this = this;
      new Swiper("#cmDetail", {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        on: {
          slideChangeTransitionEnd: function() {
            _this.activeIndex = this.activeIndex; //切换结束时，告诉我现在是第几个slide
            _this.$emit("getIndex", this.activeIndex);
            
          }
        }
      });
    }
  },
  mounted() {
    this.swiperMove();
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/swiper";
.cmDetail {
  position: relative;
  height: 3.3rem;
}
.bgImg {
  position: absolute;
  top: 0.5rem;
  height: 1.5rem;
  width: 100%;
  padding: 0.3rem 0;
  -webkit-filter: blur(20px);
}
.swiper-container {
  position: absolute;
  width: 100%;
  height: 3rem;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  img {
    height: 2.4rem;
    width: 1.8rem !important;
  }
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
</style>