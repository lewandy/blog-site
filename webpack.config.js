//node use this to work with directories
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//Export the module
module.exports = {
	entry: {
		app: './src/index.js',
		login: './src/js/login'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			node_modules: path.resolve(__dirname,'node_modules')
		}
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
				  {
					loader: MiniCssExtractPlugin.loader,
				  },
				  'css-loader',
				],
			  },
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
	new MiniCssExtractPlugin({
		// Options similar to the same options in webpackOptions.output
		// both options are optional
		filename: 'app.css',
		chunkFilename: '[id].css',
	}),
	]
}