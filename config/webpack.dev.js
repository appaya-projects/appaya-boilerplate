const webpackMerge = require('webpack-merge'),
	commonConfig = require('./webpack.comm.js'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
	mode: ENV,
	devtool: 'source-map',

	serve: {
		clipboard: false,
		logLevel: 'error',
		dev: {
			publicPath: "/",
			logLevel: 'silent'
		}
	}
});