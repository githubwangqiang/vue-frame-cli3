/**
 * Created by wq on 2019/2/11.
 */
import Vue from 'vue'
import router from '@/router/index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getFromLocal } from '@/utils/localStorage'

let indexScrollTop = 0
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 路由进入下一个路由对象前，判断是否需要登陆
  // 在路由meta对象中由个requireAuth字段，只要此字段为true，必须做鉴权处理
  if (to.matched.some(res => res.meta.requireAuth)) {
    // userData为存储在本地的一些用户信息
    let userData = getFromLocal('tokenObj')
    // 未登录和已经登录的处理
    // getUserData方法处理后如果userData.token没有值就是undefined，下面直接判断
    if (userData.token === undefined) {
      // 执行到此处说明没有登录，君可按需处理之后再执行如下方法去登录页面
      // 我这里没有其他处理，直接去了登录页面
      next({
        path: '/login',
        query: {
          redirect: to.path
        }
      })
      NProgress.done()
    } else {
      // 执行到说明本地存储有用户信息
      // 但是用户信息是否过期还是需要验证一下滴
      let overdueTime = userData.overdueTime
      let nowTime = +new Date()
      // 登陆过期和未过期
      if (nowTime > overdueTime) {
        // 登录过期的处理，君可按需处理之后再执行如下方法去登录页面
        // 我这里没有其他处理，直接去了登录页面
        next({
          path: '/login',
          query: {
            redirect: to.path
          }
        })
        NProgress.done()
      } else {
        next()
        NProgress.done()
      }
    }
  } else {
    next()
    NProgress.done()
  }
  if (to.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }
  document.title = to.meta.title || document.title
})

router.afterEach(route => {
  if (route.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }
  NProgress.done() // 结束Progress
})
