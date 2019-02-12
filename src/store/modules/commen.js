/**
 * Created by wq on 2019/1/29.
 */
// import Vue from 'vue'

const state = {
  name: 'wangqiang',
  platform: 'mobile' // 判断是移动端还是pc端
}

const mutations = {
  INIT_PLATFORM: (state, platform) => {
     state.platform = platform
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
