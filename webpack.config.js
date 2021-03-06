const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                exclude: /node_modules/,
                test: /\.pcss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'assets/index.html'),
            title: 'Practicum Middle Frontend course testing example'
        })
    ],
    devServer: {
        compress: true,
        port: 9000,
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'source-map'
            : 'eval-cheap-module-source-map'
}
