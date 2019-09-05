<template>
  <div class="cinema-schedule" v-if="cinema">
    <div class="header-left" @click="$router.go(-1)">
      <img src="@/assets/images/cd1.png" width="11px" height="18px" />
      <img src="@/assets/images/cd2.png" width="19px" height="19px" style="display: none;" />
    </div>
    <div v-if="cinema" class="header-title">{{cinema.name}}</div>
    <div class="cinema-wrap">
      <div class="cinema-info">
        <div class="tags" v-if="cinema.services && cinema.services.length ">
          <div class="tag" v-for="(item,index) in cinema.services" :key="index">{{item.name}}</div>
        </div>
        <div class="address">
          <img src="@/assets/images/address.png" alt />
          <div class="address-des">{{cinema.address}}</div>
          <a href="tel:0851-88567755" class="tel-icon">
            <img src="@/assets/images/tell.png" alt />
          </a>
        </div>
      </div>
      <div class="schedule-wrap">
        <film-item v-if="films" :films="films" @getIndex="getIndex"></film-item>
        <div class="film-info" v-if="index||films!==null">
          <p class="film-head">
            <span>{{films[index].name}}</span>
            <span>{{films[index].grade}}</span>
            <span>分</span>
          </p>
          <div
            class="film-desc"
            v-if="index!==null"
          >{{films[index].category}} | {{films[index].runtime}}分钟 | {{films[index].director}} | S·尚卡尔 拉吉尼坎塔 阿克谢·库玛尔 艾米·杰克逊 阿迪勒·侯赛因</div>
          <img src="@/assets/images/2.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FilmItem from "./components/swiperFilmsItem";
import { getCmDetail, getCmFilms } from "@/api/cinema";
export default {
  data() {
    return {
      cinema: null,
      films: null,
      index: 0
    };
  },
  components: {
    FilmItem
  },
  methods: {
    getCmDetailData() {
      let id = this.$route.params.cmId;
      getCmDetail(id).then(result => {
        if (result.status == 0) {
          this.cinema = result.data.cinema;
          // console.log(this.cinema);
        }
      });
      getCmFilms(id).then(result => {
        if (result.status == 0) {
          this.films = result.data.films;
        }
      });
    },
    getIndex(Index) {
      if (!Index) {
        this.index = 0;
      }
      this.index = Index;
    }
  },
  created() {
    this.getCmDetailData();
  },
};
</script>
<style lang="scss" scoped>
.cinema-schedule {
  overflow: hidden;
  padding-top: 0.88rem;
  background: #fff;
  min-height: 100vh;
  .header-left {
    position: fixed;
    top: 0;
    height: 0.88rem;
    line-height: 0.88rem;
    padding-left: 0.3rem;
    z-index: 303;
  }
  .header-title {
    position: relative;
    text-align: center;
    font-size: 0.34rem;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 0 0.3rem;
    background: #fff;
    top: 0;
    height: 0.88rem;
    line-height: 0.88rem;
    z-index: 302;
  }
  .cinema-wrap {
    .cinema-info {
      .tags {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.3rem;
        color: #ffb232;
        overflow: hidden;
        position: relative;
        padding: 0.1rem 0 0.3rem;
        &::after {
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
        .tag {
          position: relative;
          padding: 0.1rem 0.12rem;
          margin: 0 0.05rem;
          font-size: 0.2rem;
          &::after {
            content: " ";
            -webkit-transform: scale(0.5);
            -ms-transform: scale(0.5);
            transform: scale(0.5);
            position: absolute;
            border: 1px solid #ffb232;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;
            border-radius: 0.08rem;
            border-radius: 1px;
          }
        }
      }
      .address {
        height: 1rem;
        position: relative;
        display: flex;
        padding-left: 0.34rem;
        align-items: center;
        img {
          width: 0.28rem;
          height: 0.4rem;
        }
        .address-des {
          font-size: 0.28rem;
          height: 0.4rem;
          padding: 0 0.24rem;
          -webkit-box-flex: 1;
          -webkit-flex: 1;
          -ms-flex: 1;
          flex: 1;
          position: relative;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tel-icon {
          height: 0.36rem;
          padding: 0 0.5rem;
          img {
            width: 0.3rem;
            height: 0.3rem;
            float: left;
          }
        }
      }
    }
    .schedule-wrap {
      background: #fff;
      .film-info {
        position: relative;
        width: 100%;
        background: #fff;
        height: 1.6rem;
        .film-head {
          margin-bottom: 0.2rem;
          text-align: center;
          line-height: 0.36rem;
          span {
            font-size: 0.35rem;
            color: #191a1b;
            padding-right: 0.1rem;
            &:nth-child(2) {
              font-size: 0.4rem;
              font-style: italic;
              color: #ffb232;
            }
            &:nth-child(3) {
              font-size: 0.25rem;
              color: #ffb232;
            }
          }
        }
        .film-desc {
          text-align: center;
          height: 0.36rem;
          color: #797d82;
          font-size: 0.26rem;
          padding: 0 12%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        & > img {
          width: 0.08rem;
          background: #fff;
          height: 0.16rem;
          position: absolute;
          right: 0.3rem;
          top: 0;
          margin-top: 0.72rem;
        }
      }
    }
  }
}
</style>