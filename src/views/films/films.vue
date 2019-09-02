<template>
  <div>
    <banner-auto></banner-auto>
    <van-sticky @scroll="onScroll($event)">
        <film-header v-show="isFixed"></film-header>
        <tab-nav></tab-nav>
    </van-sticky>
    <router-view></router-view>
  </div>
</template>
<script>
import BannerAuto from "./components/Banner";
import TabNav from "./components/TabNav";
import FilmHeader from "./components/header";
export default {
  data() {
    return {
      isFixed:false
    };
  },
  components: {
    BannerAuto,
    TabNav,
    FilmHeader
  },
  methods: {
      onScroll(e){
        // console.log(e);
        this.isFixed = e.isFixed
      }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>