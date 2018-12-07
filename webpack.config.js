const path =  require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');


const commonConfig = merge([
    {
        entry: './src/index.js'
    },
    {
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'index_bundle.js'
        }
    },
    {
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
        ],
    },
    parts.loadJavaScript({
        exclude: /node_modules/,
    }),
]);

const productionConfig = merge([
    parts.extractCSS({
        use: ['css-loader?importLoaders=1', parts.autoprefix()],
    }),
]);

const developmentConfig = merge([
    parts.loadCSS(),
]);


module.exports = mode => {
    if (mode === 'production') {
        console.log('mode: ', mode);
        return merge(commonConfig, productionConfig, { mode });
    }

    console.log('mode: ', mode);
    return merge(commonConfig, developmentConfig, { mode });
}