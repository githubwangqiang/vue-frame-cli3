/**
 * Created by wq on 2019/1/30.
 */
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.douban.com',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('autoprefixer')(),
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
}
