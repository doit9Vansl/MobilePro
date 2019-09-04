<template>
  <header class="header">
    <div class="left">
      <div class="city" @click="$router.push('/city')">
        <span>{{$store.state.cityName}}</span>
        <img src="@/assets/images/Cinemas.png" />
      </div>
    </div>
    <div class="title">
      <div>影院</div>
    </div>
    <div class="right">
      <div>
        <div class="toCinemaSearch">
          <img src="@/assets/images/CinemasSearch.png" alt />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.header {
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 3000;
  background-color: #fff;
  display: flex;
  // border-bottom: 1px solid #ededed;
  color: #ededed;
  & > div {
    float: left;
    height: 0.88rem;
  }
  .left {
    min-width: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.3rem;
    .city {
      align-items: center;
      display: flex;
      span {
        display: inline-block;
        font-size: 0.26rem;
        max-width: 1.18rem;
        height: 0.32rem;
        line-height: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 0.1rem;
        color: #191a1b;
      }
      img {
        width: 0.12rem;
        height: 0.06rem;
      }
    }
  }
  .title {
    text-align: center;
    font-size: 0.34rem;
    color: #191a1b;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    div {
      color: #191a1b;
      text-align: center;
      font-size: 0.34rem;
    }
  }
  .right {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.3rem;
    div {
      width: 100%;
      text-align: right;
      img {
        width: 0.36rem;
        height: 0.36rem;
      }
    }
  }
}
</style>