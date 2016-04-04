var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var projectRootPath = path.resolve(__dirname, './');
var distPath = path.resolve(projectRootPath, './dist');

module.exports = {
  devtool: "source-map",
  entry:  projectRootPath + "/src/index.js",
  output: {
    filename: "[name]-[hash].js",
    path: distPath + "/assets",
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
            loader: 'file-loader'
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
        // Clean out the dist folder
        new CleanPlugin([distPath], projectRootPath),

        // use index-tmpl.html
        new HtmlWebpackPlugin({
            template: projectRootPath + '/src/index-tmpl.html',
            inject:   true,
            title:    'Light Bootstrap Dashboard - React.js',
            filename: distPath + '/index.html'
        }),

        // Extracts CSS from bundle.js. ExtractTextPlugin under loaders above are used to define what is extracted.
        new ExtractTextPlugin("css/[name]-[hash].css"),

        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
        })
  ]
};
