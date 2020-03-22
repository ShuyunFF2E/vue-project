const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const { description } = require('../package.json');
const { version } = require('vue/package.json');
const { VueLoaderPlugin } = require('vue-loader');

const utils = require('./utils')

module.exports = ({ mode }) => ({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@src': utils.resolve('src'),
            '@pages': utils.resolve('src/pages'),
            '@assets': utils.resolve('src/assets'),
            '@stores': utils.resolve('src/stores'),
            '@routers': utils.resolve('src/routers'),
            '@commons': utils.resolve('src/commons'),
            '@components': utils.resolve('src/components')
        }
    },

    module: {
        rules: [
            // {
            //     test: /\.(js|vue)$/,
            //     use: 'eslint-loader',
            //     enforce: 'pre'
            // }, {
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(mode)
		}),
        new HtmlWebpackPlugin({
			env: mode,
			base: './',
			vueVersion: version,
			title: description,
			filename: 'index.html',
			template: utils.resolve('src/index.html'),
			inject: true,
			minify: mode === 'production'
		}),
        new VueLoaderPlugin()
    ]
})
