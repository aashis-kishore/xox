const path =  require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');


const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
};

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
    parts.clean(PATHS.build),
    parts.extractCSS({
        use: ['css-loader?importLoaders=1', parts.autoprefix()],
    }),
    parts.generateSourceMap({ type: 'source-map' }),
    parts.minifyJavaScript(),
    parts.minifyCSS({
        options: {
            discardComments: {
                removeAll: true,
            },
            // Run cssnano in safe mode to avoid potentially unsafe transformations
            safe: true,
        },
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