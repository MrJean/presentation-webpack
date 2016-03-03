var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry: ["./hello"],
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: 'public'
    },
    resolve: {
        extensions: ['','.js']
    }
}
