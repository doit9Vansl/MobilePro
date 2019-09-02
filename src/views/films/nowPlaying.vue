<template>
  <div class="film-list-content">
    <van-list v-model="loading" :finished="finished" finished-text="已经到底了哟" @load="onLoad">
      <ul class="film-list-group">
        <film-list :item="val" :type="1" v-for="(val) in list" :key="val.id"></film-list>
      </ul>
    </van-list>
  </div>
</template>
<script>
import requestData from "@/api/films";
import FilmList from "./components/filmList";
import { log } from 'util';
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageInfo: {
        pageNum: 0,
        pageSize: 10
      }
    };
  },
  components: {
    FilmList
  },
  methods: {
    onLoad() {
      this.pageInfo.pageNum++;
      let query = {
        type: 1,
        ...this.pageInfo //把pageInfo展开存入query对象中，作为参数data一起携带过去
      };
      requestData.getNowPlaying(query).then(result => {
        if (result.status == 0) {
          this.loading = false;
          //每次的result.data.films吐10个，
          //所以用到了concat把以前的和现在的两个数组拼成一个新的数组
          //所以上面的pageInfo.pageNum需要++
          // console.log(result.data.films);
          this.list = this.list.concat(result.data.films);
          if (this.list.length >= result.data.total) {
            this.finished = true;
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.film-list-content {
  background: #fff;
  margin-bottom: 1rem
}
.film-list-group {
  padding: 0 0.3rem;
}
</style>