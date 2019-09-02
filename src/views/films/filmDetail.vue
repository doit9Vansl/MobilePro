<template>
  <div class="main">
    <!-- 详情页头部组件 -->
    <detail-header :title="filmInfo.name" v-if="filmInfo"></detail-header>
    <div class="container">
      <!-- 电影详情的大图部分 -->
      <div v-if="filmInfo">
        <div class="film-poster">
          <img :src="filmInfo.poster" />
        </div>
        <!-- 电影基本说明部分 -->
        <div class="film-base-desc">
          <h2 class="filmtitle">
            {{filmInfo.name}}
            <span>{{filmInfo.filmType.name}}</span>
            <p>
              <i>{{filmInfo.grade}}</i>分
            </p>
          </h2>
          <p style="letter-spacing:0.05rem">{{filmInfo.category}}</p>
          <p>{{filmInfo.premiereAt|getPremiereAt('ymd')}}上映</p>
          <p>{{filmInfo.nation}} |{{filmInfo.runtime}}分钟</p>
          <div ref="synopsis" class="synopsis" :class="{hide:isHide}">{{filmInfo.synopsis}}</div>
          <div class="toggle" @click="isHide=!isHide">
            <img src="@/assets/images/toggle.png" alt :class="{upper:!isHide}" />
          </div>
        </div>
      </div>
      <div class="nav-bar">
        <a href class="go-shedule">选座购票</a>
      </div>
    </div>
    <!-- 详情页演员组件 -->
    <actor-list :actors="filmInfo.actors" v-if="filmInfo&&filmInfo.actors"></actor-list>
    <!-- 剧照组件 -->
    <still-list :photos="filmInfo.photos" v-if="filmInfo&&filmInfo.photos"></still-list>
  </div>
</template>
<script>
import requestData from "@/api/films";
import DetailHeader from "./components/detailHeader";
import ActorList from "./components/actors";
import StillList from "./components/stills";
export default {
  data() {
    return {
      filmInfo: null,
      isHide: false
    };
  },
  components: {
    DetailHeader,
    ActorList,
    StillList
  },
  watch: {
    //手动改变地址栏的filmId，详情页的内容会跟着更新
    $route: {
      // handler(value) {
      //   this.getDetailData(val.params.id)
      // }
      handler() {
        this.getDetailData();
      }
    },
    deep: true,
    immediate: true
  },
  methods: {
    getDetailData() {
      let id = this.$route.params.id;
      requestData.getDetail(id).then(result => {
        if (result.status == 0) {
          this.filmInfo = result.data.film;
          // console.log(this.filmInfo);
        }
      });
    }
  },
  mounted() {
    this.getDetailData();
  },
  updated() {
    let ele = this.$refs.synopsis;
    if (ele.style.height) return; //判断元素是否有高度(即判断class中有无hide样式)
    //加了样式就默认样式，没有加hide的class样式，就动态设置高度
    ele.style.height = ele.offsetHeight + "px";
    this.isHide = true;
  }
};
</script>
<style scoped lang="scss">
.main {
  background-color: #f4f4f4;
}
.film-detail {
  height: 20rem;
  background: red;
}
/* 电影详情中的大图 */
.film-poster {
  height: 4.2rem;
  background-color: #ccc;
  width: 100%;
}
.film-poster img {
  width: 100%;
}
/* 电影详情中大图下文字说明 */
.film-base-desc {
  padding: 0.3rem;
  padding-top: 0.24rem;
  background-color: #fff;
  .filmtitle {
    color: #191a1b;
    font-size: 0.36rem;
    height: 0.48rem;
    line-height: 0.48rem;
    margin-right: 0.14rem;
    span {
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
      display: inline-block;
    }
    p {
      float: right;
      color: #ffb232;
      text-align: right;
      i {
        font-style: italic;
        margin-right: 3px;
      }
    }
  }
  & > p {
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #797d82;
    margin-top: 0.08rem;
  }
  .synopsis {
    line-height: 0.4rem;
    font-size: 0.26rem;
    color: #797d82;
    margin-top: 0.2rem;
    transition: height 0.6s;
    &.hide {
      height: 0.8rem !important;
      overflow: hidden;
    }
  }
  .toggle {
    text-align: center;
    height: auto;
    width: 0.4rem;
    margin: auto;
    line-height: 0.16rem;
    cursor: pointer;
    img {
      width: 8px;
      margin: auto;
      &.upper {
        -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }
  }
}
/* 选座购票固定区域 */
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
}
.go-shedule {
  display: block;
  height: 0.98rem;
  line-height: 0.98rem;
  text-align: center;
  width: 100%;
  background-color: #ff5f16;
  color: #fff;
  font-size: 0.32rem;
}
</style>