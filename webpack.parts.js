const MiniCssExtractPlugin = require('mini-css-extract-plugin');


exports.loadJavaScript = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include,
                exclude,
                use: {
                    loader: 'babel-loader'
                }
            },
        ],
    },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ],
    },
});

exports.extractCSS = ({ include, exclude, use = [] }) => {
    const plugin = new MiniCssExtractPlugin({
        filename: 'static/css/style.css'
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: [
                        MiniCssExtractPlugin.loader,
                    ].concat(use)
                },
            ],
        },
        plugins: [plugin],
    };
};

exports.autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => [require('autoprefixer')()],
    },
});