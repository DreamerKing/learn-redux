const   path = require('path'),
		webpack = require('webpack'),
		htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	module: {
		rules:[
		{
			test: '/\.js$/',
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [require('babel-plugin-transform-object-rest-spread')]
				}
			}
		}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new htmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	entry: './src/counter.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: "bundle.js"
	}
}