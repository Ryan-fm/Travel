<template>
    <div class="list">
        <flexbox>
            <flexbox-item :span="9">
                <div class="flex-demo">
                    <img src="../../../../static/img/hot.png" style="height:.3rem">
                    <span>本周热门榜单</span>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="flex-demo" @click="getList">
                    <span>全部榜单</span>
                    <img src="../../../../static/img/right-to.png" style="height:.3rem">
                </div>
            </flexbox-item>
        </flexbox>
        <div class="main-content">
            <div class="sights">
                <img src="http://img1.qunarzz.com/sight/p0/1809/37/37ca3ffbf49fcd75a3.img.jpg_250x250_3bb4b8e7.jpg" style="height:2.5rem;margin-top:.05rem">
                <p class="font-set">中国非物质文化遗产园</p>
                <p class="font-set red-font">￥25.00起</p>
                <img src="../../../../static/img/first.png" style="height:.6rem" class="img-set">
            </div>
             <div class="sights">
                <img src="http://img1.qunarzz.com/sight/p0/201403/07/2a6d513648355fef91cf36be8b6a51c7.jpg_250x250_00ab6cf5.jpg" style="height:2.5rem;margin-top:.05rem">
                <p class="font-set">包公园</p>
                <p class="font-set red-font">￥25.00起</p>
                <img src="../../../../static/img/second.png" style="height:.6rem" class="img-set">
            </div>
             <div class="sights">
                <img src="http://img1.qunarzz.com/sight/p0/1609/a9/a90f734bbc7b80aea3.water.jpg_250x250_00ef9abf.jpg" style="height:2.5rem;margin-top:.05rem">
                <p class="font-set">合肥万达主题乐园</p>
                <p class="font-set red-font">￥46.00起</p>
                <img src="../../../../static/img/third.png" style="height:.6rem" class="img-set">
            </div>
             <div class="sights">
                <img src="http://img1.qunarzz.com/sight/p0/1411/1b/1c2cabdec40acaa25dc6b038c43d7376.water.jpg_250x250_4fb92d9c.jpg" style="height:2.5rem;margin-top:.05rem">
                <p class="font-set">金孔雀温泉</p>
                <p class="font-set red-font">￥25.00起</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Flexbox, FlexboxItem} from 'vux'
    export default {
        name: 'Ranks',
        components: {
            Flexbox,
            FlexboxItem,
        },
        methods:{
            getList(){
                this.$router.push({
                    path:"list",
                    query:{}
                })
            }
        }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 @import '~styles/mixins.styl'
    .list
        line-height:.8rem
        background:#eee
        text-indent:.2rem
        .main-content
             background-color:#fff
             height:3.8rem
             display:flex
             overflow-x:scroll
             .sights
                margin-right:.1rem
                float:left
                width:2.5rem
                position:relative
                .font-set
                    margin-top: .12rem;
                    color: #212121;
                    font-size: .24rem;
                    line-height: .32rem;
                    text-align: center
                    ellipsis()
                .red-font
                    color:#ff8300
                .img-set
                    position:absolute
                    top:.09rem
                    left:.1rem
</style>
