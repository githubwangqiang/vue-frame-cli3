<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      name: state => state.commen.name,
      platform: state => state.commen.platform
    })
  },
  async mounted () {
    console.log(this.platform)
    console.log(this.name)
    console.log(process.env.NODE_ENV)
    console.log(process.env.VUE_APP_CURRENTMODE)
    console.log(process.env)
    // this.$loading('开始')
    // const res = await this.$api.test.douban({
    //   start: 25,
    //   count: 25
    // })
    // console.log(res)
  }
}
</script>
