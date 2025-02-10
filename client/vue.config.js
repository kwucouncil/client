const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // publicPath : "/home",
  devServer: {
    proxy : 'https://backend-pi-nine-35.vercel.app'
  }
})
