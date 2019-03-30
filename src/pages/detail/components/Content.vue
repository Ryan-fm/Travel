<template>
  <div class="list">
    <flexbox class="firF">
      <flexbox-item style="border-right:1px solid #f5f5f5">
         <div class="flex-demo">
            <span style="font-size:.44rem;color:#ff8300">5.0分</span> <span>超赞</span>
            <img src="../../../../static/img/next.png" style="height:.4rem;padding-left:.8rem">
         </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo">
           <span>景点简介</span>
            <img src="../../../../static/img/next.png" style="height:.6rem;
            padding-left:1rem">
        </div>
      </flexbox-item>
    </flexbox>
    <div class="secF">
        <img src="../../../../static/img/ticket.png" style="height:.5rem">
        <span>门票</span>
         <flexbox class="ticket-set" v-for="item of list">
          <flexbox-item :span="9">
            <div class="flex-demo">
              <p>{{item.title}}</p>
            </div></flexbox-item>
          <flexbox-item>
          <div class="flex-demo">
              <p style="color:#ff9800">￥168.00</p>
          </div>
          </flexbox-item>
         </flexbox>
    </div>
    <div class="thirdF">
         <img src="../../../../static/img/comment.png" style="height:.2rem">
        <span>用户评论</span>
         <flexbox class="comment-set" v-for="item of beforeUser">
            <flexbox-item :span="9"><div class="flex-demo">
                <rater v-model="item.UserStarts" style="height:.2rem"></rater>
                <p>{{item.UserCom}}</p>
            </div></flexbox-item>
            <flexbox-item><div class="flex-demo">
                  <span>2019-1-30</span>
            </div>
            </flexbox-item>
          </flexbox>
        <flexbox>
          <flexbox-item class="more-comment">
            <div class="flex-demo">
                  <span>更多评论</span>
                  <img src="../../../../static/img/right-to.png" style="height:.4rem;padding-left:.2rem">
            </div>
          </flexbox-item>
        </flexbox>
    </div>
    <div class="forF">
        <img src="../../../../static/img/more.png" style="height:.4rem;">
        <span>看了该景点的人还看了</span>
         <ul>
            <router-link
                tag="li"
                class="item border-bottom"
                v-for="item of recommendList"
                :key="item.id"
                :to.pervent="'/detail/' + item.id"
                >
                    <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem, Rater} from 'vux'
import axios from 'axios'
    export default{
      name: 'Content',
       components: {
          Flexbox,
          FlexboxItem,Rater
        },
        props:{
            list:Array,
            beforeUser:Array
        },
         data(){
            return{
                key:this.$route.query.key,
                recommendList:[],  //图片
                start1:"" //星级
            }
        },
        methods:{
          getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)   // this.city 从 computed 中获取
              .then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
              const data = res.data
              this.recommendList = data.recommendList
            }
          }
        },
        mounted(){
          this.getHomeInfo()
        }
    }

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .list
        background-color:#f5f5f5
      .firF
         background-color:#fff
        .firF .flex-demo
            height:.4rem
            line-height:.4rem
            padding:0.3rem
      .secF
        margin-top:.3rem
        padding:.2rem .4rem
        background-color:#fff
        .ticket-set
           padding-top:.4rem
           border-bottom:1px solid #f5f5f5
           height:.54rem
           line-height:.24rem
      .thirdF
          margin-top:.3rem
          padding:.2rem .4rem
          background-color:#fff
          .comment-set
             padding-top:.4rem
             border-bottom:1px solid #f5f5f5
             line-height:.42rem
             padding-bottom:.2rem
          .more-comment
              text-align:center
              padding-top:.4rem
      .forF
         margin-top:.3rem
         padding:.2rem .4rem
         background-color:#fff
         .item
            padding-top:.4rem
            overflow:hidden
            display:flex
            height:2.2rem
            .item-img
                width:1.7rem
                height:1.7rem
                padding:.1rem
            .item-info
                flex:1
                padding:.1rem
                min-width:0
                .item-title
                    line-height:.54rem
                    font-size:.32rem
                    ellipsis()
                .item-desc
                    line-height:.4rem
                    color:#ccc
                    ellipsis()

                .item-button
                    line-height:.44rem
                    margin-top:.2rem
                    background:#ff9300
                    padding: 0 .2rem
                    border-radius:.06rem
                    color:#fff
    p
      font-size:$font-normal

</style>
