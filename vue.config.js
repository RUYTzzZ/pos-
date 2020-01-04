module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  devServer: {

    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://blog.ruytzzz.tk',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
