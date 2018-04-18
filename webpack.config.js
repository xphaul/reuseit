
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [{
                    loader: "handlebars-loader",
                    options: {
                        helperDirs: path.resolve(__dirname, './src/components')
                    }
                }]
            }
        ]
    },
    devServer: {
        hot: true,
        compress: true,
        open: true,
        stats: 'errors-only',
    },
    mode: 'development',
    watch: true,
    node: {
        fs: 'empty'
    }
};
