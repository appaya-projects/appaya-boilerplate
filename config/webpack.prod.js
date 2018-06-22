const webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.comm.js'),
  path = require('path'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  mode: ENV,
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, '..') + '/build',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
           'image-webpack-loader'
        ]
      },
      {
        test: /\.css$/, use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true, plugins: (loader) => [autoprefixer()] } }]
      },
      {
        test: /\.scss$/, use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, minimize: true } },
          { loader: 'postcss-loader', options: { sourceMap: true, plugins: (loader) => [autoprefixer()] } },
          { loader: 'sass-loader', options: { sourceMap: true, importLoaders: 1 } }]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
			filename: "[name].css"
		})
  ]
});

