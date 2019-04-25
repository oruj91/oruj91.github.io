const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        wellcome: ['babel-polyfill', './src/js/wellcome.js'],
        home: ['babel-polyfill', './src/js/home.js'],
        biography: ['babel-polyfill', './src/js/biography.js'],
        projects: ['babel-polyfill', './src/js/projects.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'wellcome.html',
            template: 'src/wellcome.html',
            chunks: ['wellcome']
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: 'src/home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            filename: 'biography.html',
            template: 'src/biography.html',
            chunks: ['biography']
        }),
        new HtmlWebpackPlugin({
            filename: 'projects.html',
            template: 'src/projects.html',
            chunks: ['projects']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../'
                    }
                  },
                  "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },            
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'img/'
                    }
                  }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    }
};