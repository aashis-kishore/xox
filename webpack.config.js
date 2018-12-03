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

const productionConfig = merge([
    parts.extractCSS({
        use: ['css-loader', parts.autoprefix()],
    }),
]);

const developmentConfig = merge([
    parts.loadCSS(),
]);

module.exports = mode => {
   if(mode === 'production') {
       console.log('mode: ' + mode);
       return merge(commonConfig, productionConfig, { mode });
   }

   console.log('mode: ' + mode);
   return merge(commonConfig, developmentConfig, { mode });
};