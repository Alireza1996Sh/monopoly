require('dotenv').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './index.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].js',
    },
    target: 'node',
    node: {
        // Need this when working with express, otherwise the build fails
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    module: {
        rules: [
            {
                // Transpiles ES6-8 into ES5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/transform-runtime'],
                },
            },
        ],
    },
    devtool: process.env.NODE_ENV !== 'production' && 'source-map',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
