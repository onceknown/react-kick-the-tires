var webpack = require('webpack'),
  AppCachePlugin = require('appcache-webpack-plugin');

module.exports = {
  watch: true,
  devtool: 'source-map',
  target: 'web',
  entry: {
    "main": "./app/main.js",
    "vendor": ["react", "react-router"]
  },
  output: {
    path: __dirname + '/public',
    filename: "[name].js",
    chunkFilename: "[name].[id].[hash].js"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: __dirname + '/node_modules',
      loader: 'jsxhint-loader'
    }],
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.js$/,
        loader: 'jsx-loader'
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.optimize.OccurenceOrderPlugin(true)
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: true,
    //   mangle: true
    // })
    // new AppCachePlugin()
  ]
};