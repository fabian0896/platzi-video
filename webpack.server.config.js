const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    mode: 'production',
    entry:{
        "app": path.resolve(__dirname, 'src/pages/containers/app.js')
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'ssr/[name].js',
        publicPath: "/",
        libraryTarget: 'commonjs2'
    },
    devtool: 'nosources-source-map',
    target: 'node',
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 
                ]
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
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]'          
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
    ]
}