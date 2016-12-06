/* eslint import/no-extraneous-dependencies: off */

import FlowtypePlugin from 'flowtype-loader/plugin';
import nib from 'nib';
import path from 'path';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';

const { NODE_ENV } = process.env;
const DEBUG = NODE_ENV === undefined || NODE_ENV === 'development';

export default {
    cache: DEBUG,
    debug: DEBUG,
    devtool: '#source-map',
    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
        port: 8000,
    },
    entry: {
        bundle: './src/browser',
        styles: './src/browser/styles/global.styl',
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'flowtype',
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
            {
                test: /\.json?$/,
                loaders: ['json'],
            },
            {
                test: /\.yml?$/,
                loaders: ['json', 'yaml'],
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css?modules'],
            },
            {
                test: /\.styl$/,
                exclude: /styles\/global\.styl$/,
                loaders: ['style', 'css?modules', 'stylus'],
            },
            {
                test: /styles\/global\.styl$/,
                loaders: ['style', 'css', 'stylus'],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'public/assets'),
        publicPath: '/assets/',
        filename: '[name].js',
    },
    plugins: [
        new FlowtypePlugin(),
        new WebpackNotifierPlugin(),
        ...(DEBUG ? [] : [
            new webpack.optimize.UglifyJsPlugin(),
        ]),
    ],
    resolve: {
        extensions: [
            '',
            '.js',
            '.jsx',
        ],
    },
    stylus: {
        use: [nib()],
        import: ['~nib/lib/nib/index.styl'],
    },
};
