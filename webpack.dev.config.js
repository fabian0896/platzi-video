const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry:{
        home: path.resolve(__dirname, 'index.js')
    },
    devServer:{
        port: 9000,
        hot: true
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        fallback: 'file-loader'          
                    }
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin({})
    ]
}