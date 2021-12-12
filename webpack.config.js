const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		libraryTarget: 'umd',
		globalObject: 'this'
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|build|dist)/,
				use: 'ts-loader'
			},
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build|dist)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [
		new CircularDependencyPlugin({
			include: /dir/,
			failOnError: true,
			allowAsyncCycles: false,
			cwd: process.cwd()
		})
	],
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react'
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
		},
		'react-datepicker': {
			commonjs: 'react-datepicker',
			commonjs2: 'react-datepicker',
		},
		'node-fetch': 'node-fetch',
		'unfetch': 'unfetch',
		'moment': 'moment',
		'react-textarea-autosize': 'react-textarea-autosize',
	}
};