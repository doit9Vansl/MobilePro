<template>
  <!-- 把默认索引值设置成组件中的索引 -->
  <van-index-bar :index-list="indexes">
    <template v-for="(char,index) in indexes">
      <van-index-anchor :index="char" :key="index" />
      <!-- 从对象里取到和上面的char所对应的值 -->
      <van-cell :title="one.name" v-for="(one) in dataList[char]" :key="one.cityId" @click="$emit('changeCity',one.cityId,one.name)"/>
    </template>
  </van-index-bar>
</template>
<script>
export default {
  props: {
    dataList: Object,
    indexes: Array,
  },
};
</script>