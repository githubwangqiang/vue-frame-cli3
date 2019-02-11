/**
 * Created by wq on 2019/1/30.
 */
// 环境value
let _isDev = process.env.NODE_ENV === 'development'

/**
 * 开发输出log
 * @param {消息} msg
 */
export const log = (msg) => {
  if (_isDev && console && console.log) {
    console.log(msg)
  }
}
