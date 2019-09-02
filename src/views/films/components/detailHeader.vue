<template>
  <header class="header-title" @scroll="handleScroll">
    <img src="@/assets/images/back.png" @click="$router.go(-1)" class="go-back" />
    <div class="filmName" :class="{show:isHaed}">{{title}}</div>
  </header>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      isHaed: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 40) {
        this.isHaed = true;
      } else {
        this.isHaed = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="scss" scoped>
.header-title {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 100vw;
  height: 0.88rem;
  z-index: 1;
  .go-back {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
  }
  .filmName {
    font-size: 17px;
    line-height: 0.88rem;
    width: 100vw;
    text-align: center;
  }
  .show {
    -webkit-transition: all 0.3s ease;
    transition: all 0.6s ease;
    background-color: #fff;
    color: #191a1b;
  }
}
</style>