const path = require('path');

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

const parts = require('./webpack.parts');


const commonConfig = merge([
    {
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    },
    {
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
    },
]);

const productionConfig = merge([]);

const developmentConfig = merge([
    
]);

module.exports =  mode => {
   if(mode === 'production') {
       return merge(commonConfig, productionConfig, { mode });
   }

   return merge(commonConfig, developmentConfig, { mode });
};