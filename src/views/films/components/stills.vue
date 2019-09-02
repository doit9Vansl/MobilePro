<template>
  <!-- 电影剧照介绍 -->
  <div class="film-photo-desc">
    <h3>
      剧照
      <p>
        全部(<i>{{photos.length}}</i>)>
      </p>
    </h3>
    <div class="photos">
      <ul>
        <li v-for="(item,index) in photos" :key="index">
          <div class="photos-item">
            <img :src="item" alt />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["photos"]
};
</script>
<style scoped lang="scss">
.film-photo-desc {
  margin-top: 0.2rem;
  margin-bottom: 2rem;
  background-color: #fff;
  & > h3 {
    text-align: left;
    font-size: 0.32rem;
    color: #191a1b;
    height: 0.64rem;
    padding: 0.3rem;
    p {
      float: right;
      font-size: 0.26rem;
      color: #797d82;
    }
  }
  .photos {
    height: 1.3rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    overflow-x: auto;
    overflow-y: hidden;
    ul {
      display: flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      // justify-content: flex-start;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding-left: 0.3rem;
      height: auto;
      li {
        width: 3rem;
        margin-right: 0.2rem;
        cursor: pointer;
        float: left;
        .photos-item {
          width: 3rem;
          height: 2rem;
          line-height: 2rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
.photos::-webkit-scrollbar {display:none}
</style>