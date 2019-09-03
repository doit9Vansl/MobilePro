<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <nav-bar v-show="showNav"></nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  data() {
    return {
      showNav: false
    };
  },
  components: {
    NavBar
  },
  //监听路由对象，根据route的meta来设置是否显示底部导航
  watch: {
    $route: {
      handler(val) {
        if (val.meta && val.meta.isNavBar) {
          this.showNav = true;
        } else {
          this.showNav = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
