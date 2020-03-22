const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBase = require('./webpack.base');
const utils = require('./utils');

const proxyConfig = JSON.parse(fs.readFileSync(utils.resolve('./.proxyconfig'), 'utf-8'));

const HOST = '0.0.0.0'
const PORT = 8888

module.exports = ({ mode, mock }, ...others) => webpackMerge(webpackBase({ mode }, ...others), {
    mode,
	devtool: 'source-map',
    devServer: {
        disableHostCheck: true,
        hot: true,
		host: HOST,
        port: PORT,
		before: app => mock && utils.mockServer(utils.resolve('./mock'), app),
		host: '0.0.0.0',
		contentBase: 'src',
		compress: true,
        proxy: proxyConfig[mode] || {},
        quiet: true,
		overlay: {
			warnings: false,
			errors: true
		},
		historyApiFallback: {
			rewrites: [
				{ from: /^\/*$/, to: '/index.html' }
			]
		}
    },

    entry: {
        app: utils.resolve('src/index.js')
    },

    output: {
        publicPath: '/',
        path: '/',
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})
