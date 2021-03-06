var path = require('path');
var webpack = require('webpack');
var TimestampWebpackPlugin = require('timestamp-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: ["./hello"],
    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/',
        filename: "bundle.js"
    },
    module: {
        preloaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        contentBase: 'public'
    },
    resolve: {
        extensions: ['','.js','.es6']
    },
    plugins: [
        new TimestampWebpackPlugin({
            path: __dirname,
            filename: 'timestamp.json'
        }),
        new webpack.BannerPlugin("************\nGenerated by web pack\n***********\n")
    ]
}
