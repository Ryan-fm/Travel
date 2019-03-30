<template>
  <div class="login" style="background: #f3f9fc;">
    <flexbox style="height: 1rem;background:#18a9b9;line-height: .44rem;">
      <flexbox-item :span="5">
        <div class="flex-demo">
          <img src="../../../static/img/back.png" alt="" @click="goBack()">
        </div>
      </flexbox-item>
      <flexbox-item :span="5">
        <div class="flex-demo">
           <span>登录</span>
        </div>
      </flexbox-item>
      <flexbox-item>
        <div class="flex-demo" @click="goRegister()">
            <span>注册</span>
        </div>
      </flexbox-item>
    </flexbox>
    <group style="padding: 0 20px;">
      <x-input title="姓名" name="username" v-model="username" placeholder="请输入姓名" is-type="china-name" class="set-margin"></x-input>
      <x-input title="邮箱" name="email" v-model="email" placeholder="请输入邮箱地址" is-type="email" class="set-margin"></x-input>
      <x-input title="手机号码" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" class="set-margin"></x-input>
      <x-input title="请输入密码" type="text" placeholder="密码不少于6位" v-model="password" :min="6" :max="8" @on-change="change" class="set-margin"></x-input>
      <x-input title="确认密码" v-model="password2" type="text" placeholder="确认密码" :equal-with="password" class="set-margin"></x-input>
    </group>
    <flexbox>
      <flexbox-item>
        <div class="flex-demo">
          <x-button @click.native="goLogin()">登录</x-button>
        </div></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem,XInput,XButton  } from 'vux'
  import axios from 'axios'
  export default {
    components: {
      Flexbox,
      FlexboxItem,XInput,XButton
    },
    data(){
      return{
        username:'',//用户姓名
        password:'',//密码
      }
    },
    methods:{
      change (val) {
        console.log('on change', val)
      },
      //返回上一级
      goBack(){
          this.$router.push({
            path:'/',
          })
      },
      //登录
      goLogin(){
        axios.get('' + this.city)   // this.city 从 computed 中获取
          .then(this.getSucc)
      },
      getSucc(res){
            //把用户信息存到localstroage 中 在首页进行判断
      },
      //跳转到注册页
      goRegister(){
        this.$router.push({
          path:'register',
        })
      }
      }
  }
</script>

<style lang="stylus" scoped>
  .set-margin
    border:1px solid rgb(243, 249, 252)
</style>
