<template>
  <div class="search">
    <van-search
      v-model="searchVal"
      placeholder="输入城市名或拼音"
      show-action
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal:null,
    };
  },
  methods: {
    onSearch() {},
    onCancel() {},
    sendSearch(){
      this.$emit('getV',this.searchVal)
    }
  },
  updated() {
    this.sendSearch()
  }
};
</script>
<style scoped>
.search {
  background-color: #fff;
}
</style>