const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
    },
    {
        // In this module change the code for bundling of client
        mode: "development",
        entry: './react/index.js',
        output: {
            path: __dirname+'/dist/assets',
            publicPath: '/',
            filename: 'bundle.js'
        },
        devtool: 'inline-source-map', // it is used for development to identify errors more clearly
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
            // new webpack.ProvidePlugin({
            //     $: "jquery",
            //     jQuery: "jquery",
            //     "window.jQuery": "jquery"
            // }),
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { // here we are creating seperate bundle for node modules
                        test: /[\\/]node_modules[\\/(?!express)\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/i, // this regex read all types of css and css pre-processor
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],


                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx','.css'],
        }
    }
]