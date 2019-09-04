<template>
  <div>
    <div id="map-container">{{city}}</div>
  </div>
</template>
<script>
import location from "@/utils/location";
export default {
  data() {
    return {
      city: null
    };
  },
  methods: {
    getIp() {
      // console.log(this.$store.state.cityId);
      //   if (this.$store.state.cityId) {
      //     return;
      //   }
      location.initMap("map-container", cityName => {
        this.city = cityName;
        this.$emit("gitCityName", cityName); // 向父组件传递当前城市
      });
    }
  },
  mounted() {
    this.getIp();
  }
};
</script>