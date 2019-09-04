<template>
  <div>
    <van-sticky>
      <cinema-hea></cinema-hea>
      <drop-down-menu
        v-if="CmListData"
        :CmList="CmListData"
        @getType="getType"
        @getDistrictName="getDistrictName"
      ></drop-down-menu>
    </van-sticky>
    <cm-list v-if="CmListData" :CmList="CmListData"></cm-list>
  </div>
</template>
<script>
import CinemaHea from "./components/CinemaHea";
import CmList from "./components/cmList";
import DropDownMenu from "./components/dropdownMenu";
import { getCmList } from "@/api/cinema";
export default {
  data() {
    return {
      CmListData: null,
      cmlist: null
    };
  },
  components: {
    CinemaHea,
    CmList,
    DropDownMenu
  },
  methods: {
    //获取所有影院列表
    getCmData(e) {
      //e代表影院列表中的订票方式，需要携带的参数
      getCmList(e).then(result => {
        if (result.status == 0) {
          this.cmlist = this.CmListData = result.data.cinemas;
          this.getDistrictName();
        }
      });
    },
    //接收子组件传递过来的参数
    getType(e) {
      if (!e) {
        e = 1;
      }
      this.getCmData(e);
    },
    //接收子组件传递过来的参数（选择的区域名字和以区id为键，对应id下的影院为值得键值对）
    getDistrictName(e, v) {
      // console.log(v);
      if (e == 0) {
        this.CmListData = this.cmlist;
      } else if (e) {
        this.CmListData = v[e];
      }
    }
  },
  created() {
    this.$toast.loading({ message: "", duration: 500 });
    // this.getDistrictName();
  },
  mounted() {
    this.getType();
  }
};
</script>
<style scoped lang="scss">
</style>