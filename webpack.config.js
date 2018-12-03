const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const path = require('path');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};