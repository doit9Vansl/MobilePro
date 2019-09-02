<template>
  <!-- 电影演员相片 -->
  <div class="actors">
    <h3>演职人员</h3>
    <div class="actors-list">
      <ul>
        <li v-for="(item,index) in actors" :key="index">
          <div class="actors-item">
            <img :src="item.avatarAddress" alt />
            <p>{{item.name}}</p>
            <p>{{item.role}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:['actors'],
  data(){
    return{
      actor:this.actors
    }
  },

};
</script>
<style scoped lang="scss">
.actors {
  margin: 0.2rem 0;
  background-color: #fff;
  h3 {
    padding: 0.3rem;
    font-size: 0.32rem;
    text-align: left;
    color: #191a1b;
    height: 0.44rem;
    line-height: 0.44rem;
  }
  .actors-list {
    height: 2.8rem;
    overflow-x: auto;
    overflow-y: hidden;
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding:0 0.3rem;
      li {
        width: 1.7rem;
        margin-right: 0.2rem;
        cursor: pointer;
        float: left;
        .actors-item {
          text-align: center;
          width: 1.7rem;
          img {
            height: 1.7rem;
            width: 1.7rem;
          }
          p {
            display: block;
            text-align: center;
            padding-top: 0.2rem;
            font-size: 0.24rem;
            color: #191a1b;
            width: 1.7rem;
            height: 0.36rem;
            display: block;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:nth-child(3){
              padding-top: 0.05rem;
              color: #797d82;
              font-size: 0.2rem;
            }
          }
        }
      }
    }
  }
}
.actors-list::-webkit-scrollbar {display:none}
</style>