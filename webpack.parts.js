const MiniCssExtractPlugin = require('mini-css-extract-plugin');


exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
});


exports.extractCSS = ({ include, exclude, use = [] }) => {
    const plugin = new MiniCssExtractPlugin({
        filename: 'static/css/style.css',
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
                    ].concat(use),
                },
            ],
        },
        plugins: [plugin],
    }
};