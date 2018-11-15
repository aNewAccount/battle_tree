var config = {
  devServer: {
    port: 8080,
    proxy: 'http://114.215.30.211:5000/'
  },
  pluginOptions: {},
  transpileDependencies: [
    /\/node_modules\/vue-echarts\//,
    /\/node_modules\/resize-detector\//
  ],
  // baseUrl: process.env.GLOBAL_BASE_URL,
  configureWebpack: {
    // plugins: [
    //   new CompressionWebpackPlugin({
    //     algorithm: 'gzip',
    //     test: /\.js(\?.*)?$/i,
    //     compressionOptions: { level: 1 }
    //   })
    // ],
    externals: {}
  }
}

module.exports = config
