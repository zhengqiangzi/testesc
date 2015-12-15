var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js','.css','.scss'],
    modulesDirectories:['node_modules','.','./blj'],//模块查找路径设置
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test:/\.css$/,
        loader:"style!css!autoprefixer"

      },
      {
        test:/\.png|\.jpg/,
        loader:"url"

      }
    ]
  },
  devServer:{
      inline:true,
      hot:true
  }
}


