//node use this to work with directories
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//Export the module
module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	mode: 'development',
	module: {
		rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
       ]
	},
	plugins: [new HtmlWebpackPlugin()]
}