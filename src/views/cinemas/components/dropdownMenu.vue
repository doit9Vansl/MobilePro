<template>
  <van-dropdown-menu>
    <van-dropdown-item v-model="value1" :options="districtNameres" @change="select1($event)" />
    <van-dropdown-item v-model="value2" :options="option2" @change="select($event)" />
    <van-dropdown-item v-model="value3" :options="option3" />
  </van-dropdown-menu>
</template>
<script>
export default {
  props: ["CmList"],
  data() {
    return {
      IdofName: {}, //以区id为键，对应id下的影院为值得键值对
      districtName: [], //区名
      districtId: [], //区id
      districtNameres: [],
      value1: 0,
      value2: 0,
      value3: "a",
      option1: { text: "全城", value: 0 },
      option2: [{ text: "APP订票", value: 0 }, { text: "前台兑换", value: 1 }],
      option3: [
        { text: "最近去过", value: "a" },
        { text: "离我最近", value: "b" }
      ]
    };
  },
  methods: {
    //把区id和区名分类
    getDistrictName() {
      let result = {};
      this.CmList.forEach((item, index) => {
        let k = item.districtId;
        if (!result[k]) {
          let indexs = 0;
          result[k] = [];
          this.districtId.push(k);
          this.districtName.push({
            text: item.districtName,
            value: item.districtId
          });
          this.districtNameres = [this.option1, ...this.districtName];
        }
        result[k].push(item);
      });
      return (this.IdofName = result);
    },
    //分父组件传递app订票还是前台订票的参数
    select(e) {
      this.$emit("getType", e + 1);
    },
    select1(e) {
      this.$emit("getDistrictName", e,this.IdofName);
    }
  },
  created() {
    this.getDistrictName();
  },
  mounted() {
    this.select1();
    this.select();
  }
};
</script>