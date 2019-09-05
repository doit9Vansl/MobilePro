<template>
  <div class="center-view">
    <div class="avatar">
      <img src="@/assets/images/center.png" class="avator-icon" />
      <div class="nick-name">立即登录</div>
    </div>
    <ul class="my-order-tab">
      <li>
        <img src="@/assets/images/dd.png" width="26px" height="26px" alt />
        <span class="mint-badge is-primary is-size-small" style="display: none;">99+</span>
        <div class="common-p">电影订单</div>
      </li>
      <li>
        <img src="@/assets/images/alldd.png" width="26px" height="26px" alt />
        <div class="common-p">商品订单</div>
      </li>
    </ul>
    <!---->
    <div class="margin-set my-card">
      <img src="@/assets/images/maizuo.png" width="20px" height="20px" alt />
      <span class="label">卖座券</span>
      <img src="@/assets/images/1.png" class="arrow" />
    </div>
    <div class="margin-set my-card">
      <img src="@/assets/images/hb.png" width="20px" height="20px" alt />
      <span class="label">组合红包</span>
      <img src="@/assets/images/1.png" alt class="arrow" />
    </div>
    <div class="margin-set my-balance">
      <img src="@/assets/images/ye.png" width="20px" height="20px" alt />
      <span class="label">余额</span>
      <span class="value">
        <span class="price-decimal price-fmt">
          <i>￥</i>
          <span class="interge" style="font-size: 15px;">0</span>
          <span style="display: none;">.</span>
          <span class="decimal" style="font-size: 10px;"></span>
          <span style="display: none;">.</span>
          <span class="decimal" style="font-size: 10px; display: none;">00</span>
        </span>
      </span>
      <img src="@/assets/images/1.png" alt class="arrow" />
    </div>
    <div class="margin-set system-set">
      <img src="@/assets/images/sz.png" width="20px" height="20px" alt />
      <span class="label">设置</span>
      <img src="@/assets/images/1.png" alt class="arrow" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.center-view {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  font-size: 0.3rem;
  background: #f4f4f4;
  margin-bottom: 1.18rem;
  .avatar {
    text-align: center;
    margin-top: -0.88rem;
    height: 4rem;
    padding-left: 0.44rem;
    padding-top: 1.28rem;
    background: url(~@/assets/images/bg.6837f67.png);
    background-size: cover;
    display: flex;
    align-items: center;
    color: #fff;
    .avator-icon {
      width: 1.26rem;
      height: 1.26rem;
      border-radius: 0.7rem;
      margin-right: 0.4rem;
      border: 2px solid #fff;
    }
  }
  .my-order-tab {
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    font-size: 0.26rem;
    padding: 0;
    height: 1.58rem;
    background: #fff;
    margin-bottom: 0.2rem;
    align-items: center;
    li {
      position: relative;
      font-size: 0.26rem;
      flex: 1;
      span {
        padding: 0;
        font-size: 0.2rem;
        height: 0.32rem;
        line-height: 0.36rem;
        min-width: 0.32rem;
        background: #ff5f16;
        position: absolute;
        left: 52%;
        text-align: center;
        top: 0;
      }
      .common-p {
        color: #797d82;
      }
    }
  }
  .margin-set {
    background: #fff;
    padding: 0 0.3rem;
    height: 0.98rem;
    display: flex;
    align-items: center;
    .label {
      margin-left: 0.3rem;
      color: #191a1b;
      flex: 1;
    }
    .arrow {
      text-align: right;
      width: 0.12rem;
      height: 0.2rem;
    }
    .value {
      text-align: right;
      color: #797d82;
      padding-right: 0.28rem;
    }
  }

}
</style>