const { ProvidePlugin } = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src',
	resolve: {
		extensions: ['.js', '.jsx'],
	  },
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
		  {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
			  loader: 'babel-loader',
			  options: {
				presets: ['@babel/preset-env'],
			  },
			},
		  },
		  {
			test: /\.css$/,
			use: [
			  { loader: 'style-loader' },
			  { loader: 'css-loader' },
			],
		  },
		],
	  },
	plugins: [
		new ProvidePlugin({
			h: ['preact', 'h'],
		}),
		new HtmlWebpackPlugin({
			title: 'Preact Animate on Change Test',
		}),
	],
	devServer: {
    compress: true,
    open: true,
  },
};
