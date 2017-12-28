//const { resolve } = require('path');
const webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    /*resolve: {
        extensions: ['.js']
    },*/
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    context: __dirname + '/src',
    devServer: {
        contentBase: __dirname + '/dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    'react-hot-loader/webpack',
                    'babel-loader?presets[]=react',
                ],
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};