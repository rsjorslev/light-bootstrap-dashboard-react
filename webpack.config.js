// var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin= require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/src",
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
            //postcss is not being used anymore after i used an offline version of Roboto font. kept as a reference
            test: /\.scss$/,
            loader: 'style!css!sass'
        },
        {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        },
        /**
         *  TODO:
         *  check if the mimetype is correct or of something should be added to woff/woff2
         *  besides woff/woff2 the other mimetypes looks right
         */
        // These 5 loaders are for bootstrap fonts and the alternative is for pixeden icons
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
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
            // test: /\.svg$/,
            test: /\.(svg|svg\?d7yf1v|svg\?v=\d+\.\d+\.\d+)$/,
            loader: "url?limit=10000&mimetype=image/svg+xml"
        }
    ]
  },

/*
not needed anymore as i have downloaded the Roboto font and created @font-face in ./styles/Roboto.css
    postcss: function (webpack) {
        return [
            require("postcss-font-magician")
        ]
    },
*/

/*
dont think i need this for the WDS - only relevant for production/dist?
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            template: './src/index.ejs',
            appMountId: 'app'
        })
    ],
*/
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

  devServer: {
    contentBase: "./src",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
      proxy: {
          '/api*': {
              target: 'http://localhost:8080',
              secure: false
          },
          '/user*': {
              auth: 'rs:pass',
              target: 'http://localhost:8080',
              secure: false
          }
      }

  }
};
