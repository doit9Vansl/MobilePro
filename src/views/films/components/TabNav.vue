<template>
  <div class="tab-bar-wrap">
    <ul class="tab-bar-nav">
      <li @click="tbPercent=0,$router.push('/films/nowPlaying')" :class="{active:tbPercent==0}">
        <span>正在热映</span>
      </li>
      <li @click="tbPercent=100,$router.push('/films/comingSoon')" :class="{active:tbPercent==100}">
        <span>即将上映</span>
      </li>
    </ul>
    <div class="tab-bar-line-wrap" :style="{transform:'translate3d('+tbPercent+'%, 0px, 0px)'}">
      <span class="tab-bar-line"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tbPercent: 0,
    };
  },
  created() {
    this.tbPercent;
  },
  watch: {
    $route: {
      handler(newV) {
        // console.log(newV);
        if (newV.path == "/films/comingSoon") {
          this.tbPercent = 100;
        } else {
          this.tbPercent = 0;
        }
      },
      deep: true, //深度监听
      //代表在wacth里声明$route这个方法之后立即先去执行handler方法
      immediate: true 
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-bar-wrap {
  height: 0.9rem;
  background: #fff;
  width: 100%;
  font-size: 0.28rem;
  position: relative;
  z-index: 199;
  display: flex;
}
.tab-bar-wrap:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.tab-bar {
  position: fixed;
  top: 0.98rem;
}
.tab-bar-nav {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
}
.tab-bar-nav li {
  flex: 1;
  height: 0.32rem;
  text-align: center;
  line-height: 0.32rem;
  cursor: pointer;
}
.tab-bar-nav li.active {
  color: #ff5f16;
}
.tab-bar-nav a {
  display: block;
  line-height: 0.88rem;
  color: #191a1b;
}
.tab-bar-line-wrap {
  position: absolute;
  bottom: 0;
  width: 50%;
  z-index: 200;
  left: 0;
  transition: transform 0.2s;
}
.tab-bar-line {
  border-bottom: 2px solid #ff5f16;
  border-radius: 20px;
  display: block;
  margin: auto;
  width: 1.12rem;
}
</style>