const   path = require('path'),
		webpack = require('webpack'),
		HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: "development",
	module: {
		rules: 
		[
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					// options: {
					// 	plugins: ["react-hot-loader/babel"]
					// }
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: "[name]-[hash:8].js"
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.resolve(__dirname, "dist"),
		port: 9091,
		open: true,
		historyApiFallback: true,
		hot: true,
		proxy: {
			'/api': {
				target: "localhost:300",
				pathRewrite: { "^api": ""},
				secure: false
			}
		}
	}
}