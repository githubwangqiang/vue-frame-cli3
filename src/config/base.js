/**
 * Created by wq on 2019/1/30.
 */
const config = {
  development: {
    // api: 'http://localhost:8080',
    api: '/api', // 开启代理模式
    base: 'http://localhost:8080'
  },
  production: {
    api: 'http://xxx.xxx',
    base: 'http://localhost:8080'
  },
  prep: {
    api: 'http://xxx.xxx',
    base: 'http://localhost:8080'
  },
  test: {
    api: 'http://xxx.xxx',
    base: 'http://localhost:8080'
  }
}
export default config[process.env['NODE_ENV']]
