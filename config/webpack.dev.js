const webpackMerge = require('webpack-merge'),
	commonConfig = require('./webpack.comm.js'),
	path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
	mode: ENV,
	devtool: 'source-map',

	output: {
		path: path.resolve(__dirname, '..') + '/build',
		publicPath: '/',
		filename: '[name].js'
	},

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});