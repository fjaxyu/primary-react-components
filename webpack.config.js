const path = require('path');

const CircularDependencyPlugin = require('circular-dependency-plugin');

//==---=---=---=--=-=--===---====--===---=---=---=--=-=--===---====--=-===---=---=---=--=-=--===---====--=//



module.exports = {
	entry: path.resolve(__dirname, 'index.tsx'),
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
				include: path.resolve(__dirname, 'src'),
				exclude: [
					/(node_modules|build|dist)/,
					/\.spec\.tsx/
				],
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
			commonjs2: 'react-dom'
		},
		'node-fetch': 'node-fetch',
		'unfetch': 'unfetch',
		'moment': 'moment',
		'react-textarea-autosize': 'react-textarea-autosize'
	}
};