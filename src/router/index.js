import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
import hotList from '@/pages/home/hotList.vue'
import register from '@/pages/user/register.vue'
import login from '@/pages/user/login.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/detail',
      name:'Detail',
      component:Detail
    },{
      path:'/hot',
      name:'hot',
      component:hotList
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})
