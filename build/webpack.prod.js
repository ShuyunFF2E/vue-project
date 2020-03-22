const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const utils = require('./utils')
const package = require('../package.json');

const buildOutputDir = utils.resolve(`/${package.name}`);

module.exports = ({ mode }, ...others) => webpackMerge(webpackBase({ mode }, ...others), {
    mode,

    entry: {
        app: utils.resolve('src/index.js')
    },

    output: {
        filename: '[name]-[hash:5].min.js',
        path: buildOutputDir,
        publicPath: '/',
		libraryTarget: 'umd'
    },

    performance: {
		hints: false
    },

	optimization: {
		minimizer: [
            new TerserWebpackPlugin(),
			new OptimizeCSSAssetsPlugin({
				assetNameRegExp: /\.min\.css$/,
				safe: true,
				cache: true,
				parallel: true,
				discardComments: {
					removeAll: true
				}
			})
        ],
        splitChunks: {
            chunks: 'all',
			name: true,
			cacheGroups: {
			    vendors: {
			        test: /[\\/]node_modules[\\/]/,
			        name: 'vendors'
			    }
			}
        },
    },

    module: {
        rules: [
            {
                test: /\.(le|c)ss?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            path: buildOutputDir
        }),
        new MiniCssExtractPlugin({
			filename: '[name]-[hash:5].min.css',
			chunkFilename: '[name].css',
			allChunks: true
		})
    ]
})
