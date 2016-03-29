var webpack = require('webpack');
var ExtractTextPlugin= require('extract-text-webpack-plugin');

module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js",
    publicPath: "/assets/"
  },

  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader!?limit=8192'
        },
        // These 5 loaders are for bootstrap fonts and the alternative is for pixeden icons
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        },
        {
            test: /\.(eot|eot\?d7yf1v|eot\?v=\d+\.\d+\.\d+)$/,
            loader: "file"
        },
        {
            test: /\.(woff|woff\?v=\d+\.\d+\.\d+|woff2|woff2\?v=\d+\.\d+\.\d+|woff\?d7yf1v)$/,
            loader:"url?prefix=font/&limit=5000"
        },
        {
            test: /\.(ttf|ttf\?d7yf1v|ttf\?v=\d+\.\d+\.\d+)$/,
            loader: "url?limit=10000&mimetype=application/octet-stream"
        },
        {
            test: /\.(svg|svg\?d7yf1v|svg\?v=\d+\.\d+\.\d+)$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }
    ]
  },

    plugins: [
        // 
        new ExtractTextPlugin("style.css"),

        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    ]

/*
    postcss: function (webpack) {
        return [
            require("postcss-font-magician")
        ]
    }
*/
};
