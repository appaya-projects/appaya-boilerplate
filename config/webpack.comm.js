const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/page.js',
	resolve: {
		extensions: ['.ts', '.tsx', ".js", ".json"]
	},
	module: {
		rules: [
			{ test: /\.ts?$/, use: "awesome-typescript-loader" },
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.css$/, use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } }
				]
			},
			{
				test: /\.scss$/, use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, minimize: true } },
					{ loader: 'sass-loader', options: { sourceMap: true, importLoaders: 1 } }]
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})		
	]
};