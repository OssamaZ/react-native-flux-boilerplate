var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var config = {

	debug: true,

	devtool: 'source-map',

	entry: {
		'index.ios': ['./App/index.js']
	},

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},

	module: {
		loaders: [
			{
				test: /\.js$/, 
				loaders: ['babel?stage=0&blacklist=validation.react'],
				include: [
			    	path.resolve(__dirname, "node_modules/react-native"),
			    	path.resolve(__dirname, "App")
			    ],
			}
		],
	},
	
	resolve: {
		extensions: ['', '.js'] 
	},

	plugins: [],

};

// Hot loader
if (process.env.HOT) {
	config.devtool = 'eval'; // Speed up incremental builds
	config.entry['index.ios'].unshift('./node_modules/react-native-webpack-server/hot/entry');
	config.entry['index.ios'].unshift('webpack/hot/only-dev-server');
	config.entry['index.ios'].unshift('webpack-dev-server/client?http://localhost:8082');
	config.output.publicPath = 'http://localhost:8082/';
	config.module.loaders[0].loaders.unshift('react-hot');
	config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
}

// Production config
if (process.env.NODE_ENV === 'production') {
	config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;