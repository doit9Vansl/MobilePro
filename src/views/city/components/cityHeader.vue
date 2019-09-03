<template>
  <div class="header">
    <div class="left">
      <van-icon name="cross" @click="isCity" />
    </div>
    <div class="title">当前城市 -</div>
  </div>
</template>
<script>
export default {
  methods: {
    isCity() {
      let ip = this.$store.state.cityId;
      if (!ip) {
        this.$dialog.alert({
          message: "请选择您所在的城市"
        });
      }else{
        this.$router.go(-1)
      }
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.88rem;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 300;
  background-color: #fff;
  & > div {
    float: left;
    height: 0.88rem;
  }
  .left {
    width: 14%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    i {
      font-size: 0.4rem;
      margin-left: 0.2rem;
      color: #191a1b;
    }
  }
  .title {
    width: 72%;
    text-align: center;
    font-size: 0.34rem;
    line-height: 0.88rem;
    color: #191a1b;
  }
}
</style>