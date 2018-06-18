const path = require('path'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	autoprefixer = require('autoprefixer');

module.exports = {
	entry: './src/page.js',
	resolve: {
        extensions: [ '.ts', '.tsx', ".js", ".json"]
    },
	module: {
		rules: [
			{ test: /\.ts?$/, use: "awesome-typescript-loader" },
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[ext]'
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
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	]
};