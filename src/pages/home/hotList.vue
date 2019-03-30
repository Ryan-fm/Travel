<template>
    <div class="hotList">
        <div class="mp-img" style="position: relative">
            <img src="http://img1.qunarzz.com/sight/p0/1606/4a/4a02fed5b2cfbdc490.water.jpg_375x170_31c0fd55.jpg" style="width:100%;height:180px">
            <div class="title" style="position:absolute;top:40%;left:30%;text-align: center">
                <p style="font-size: .36rem;color: #fff;">合肥</p>
                <h6 style="font-size: .48rem;color: #fff;margin-top:.2rem">本周热门榜单</h6>
            </div>
        </div>
        <tab>
            <tab-item selected @on-item-click="onItemClick">TOP景点</tab-item>
            <tab-item @on-item-click="onItemClick">TOP线路</tab-item>
         </tab>
    </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default{
  name: 'hotList',
  components:{
      Tab, TabItem
     },
     methods:{
      onItemClick(index){

      }
     }
}
</script>
<style lang="stylus" scoped>
        .title
            position:absolute
            top:100px
            left:50%
</style>
