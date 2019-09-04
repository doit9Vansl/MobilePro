<template>
  <div class="search">
    <van-search
      v-model="searchVal"
      placeholder="输入城市名或拼音"
      show-action
      background="#f4f4f4"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal: null
    };
  },
  methods: {
    sendSearch() {
      this.$emit("getV", this.searchVal);
    },
    onSearch() {},
    onCancel() {}
  },
  updated() {
    this.sendSearch();
  }
};
</script>
<style scoped lang="scss">
.search {
  background-color: #fff;
  .van-search__content {
    background-color: #fff !important;
  }
}
</style>