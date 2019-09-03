<template>
    <div id="map-container">

    </div>
</template>
<script>
import location from '@/utils/location'
export default {
    methods:{
        getIp(){
            // console.log(this.$store.state.cityId);
            if(this.$store.state.cityId){
                return
            }
            location.initMap('map-container',(cityName)=>{
                this.$emit('gitCityName',cityName) // 向父组件传递当前城市
            })
        }
    },
    mounted(){
        this.getIp()
    }
}
</script>