const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = [
    {
        mode: "development",
        entry: "./server/index.js",
        output: {
            path: __dirname + '/dist',
            filename: 'index.js',
            libraryTarget: 'commonjs2',
            publicPath: '/'
        },
        target: "node",
        externals: webpackNodeExternals(),
        module: {
            rules: [
                {

                    test: /\.js$/, // regex to tell webpack use the following file whose extension start with .js
                    exclude: /node_modules/,
                    loader: 'babel-loader',

                }
            ]
        }
    }
]