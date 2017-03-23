// var webpack = require("webpack")
// var path = require("path")

// var DEV = path.resolve(__dirname, "components")
// var OUTPUT = path.resolve(__dirname, "output")

// var config = {
// 	entry: DEV + "/index.jsx",
// 	output: {
// 		path: OUTPUT,
// 		filename: "my_code.js"
// 	},
// 	module: {
// 		loaders: [{
// 			include: DEV,
// 			loader: "babel-loader",
// 		}]
// 	}
// }


var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/views/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/components/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig]
};
