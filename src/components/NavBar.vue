<template>
  <ul class="nav-bar">
    <li>
      <router-link to="/">
        <img src="@/assets/images/film.png" v-show="$route.meta.page==1" />
        <img src="@/assets/images/film2.png" v-show="$route.meta.page!==1" />
        <span>电影</span>
      </router-link>
    </li>
    <li>
      <router-link to="/cinemas">
        <img src="@/assets/images/download.png" v-show="$route.meta.page!==2" />
        <img src="@/assets/images/download2.png" v-show="$route.meta.page==2" />
        <span>影院</span>
      </router-link>
    </li>
    <li>
      <router-link to="/active">
        <img src="@/assets/images/news.png" />
        <span>资讯</span>
      </router-link>
    </li>
    <li>
      <router-link to="/center">
        <img src="@/assets/images/my.png" v-show="$route.meta.page!==4" />
        <img src="@/assets/images/my2.png" v-show="$route.meta.page==4" />
        <span>我的</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.2rem;
  background-color: #fff;
}
.nav-bar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-bar li {
  flex: 1;
  text-align: center;
  height: 0.98rem;
}
.nav-bar a {
  color: #797d82;
  display: block;
  height: 0.98rem;
  line-height: 0.56rem;
  width: 100%;
  position: relative;
  padding-top: 0.08rem;
  box-sizing: border-box;
}
.nav-bar img {
  width: 0.42rem;
  height: 0.42rem;
}
.nav-bar span {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>