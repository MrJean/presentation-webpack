var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./hello"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devServer: {
        contentBase: 'public'
    },
    resolve: {
        extensions: ['','.js','.es6']
    }
}
