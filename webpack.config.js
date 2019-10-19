//node use this to work with directories
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//Export the module
module.exports = {
	entry: {
		app: './src/js/index.js',
		vendors: './src/js/imports.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	resolve: {
		alias: {
			node_modules: path.resolve(__dirname, 'node_modules')
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							["@babel/preset-env", {
								useBuiltIns: "usage",
								corejs: 3
							}]
						],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Blog-itla'
		}),
		new CopyPlugin([
			{ from: './src/js/templates/', to: 'templates/' },
		]),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	]
}