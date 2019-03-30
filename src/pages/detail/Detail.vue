<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-content :list="list" :beforeUser="beforeUser"></detail-content>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailContent from './components/Content'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailContent
  },
  data () {
    return {
      id: this.$route.query.key,
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      beforeUser: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {}
      }).then(this.handleGetDateSucc)
    },
    handleGetDateSucc (res) {
      res = res.data
      let id = this.id
      console.log(res)
      if (res.ret && res.data) {
        let data = res.data[id - 1]
        console.log(data)
        this.sightName=data.sightName
        this.bannerImg=data.bannerImg
        this.gallaryImgs=data.gallaryImgs
        this.list=data.categoryList
        this.beforeUser=data.beforeUser
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
