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
          '/approvals*': {
              target: 'http://localhost:8081',
              secure: false
          },
          '/user*': {
              auth: 'rs:pass',
              target: 'http://localhost:8080',
              secure: false
          },
          '/api*': {
              target: 'https://vidm2.psg.lan/SAAS/jersey/manager',
              secure: false,
              headers: {
                  'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0ZDFlOTJkZi1mZTMzLTRjYzQtOTBhMC1kM2NkNWE1NmMwZjEiLCJwcm4iOiJhcHByb3ZhbEBWSURNMiIsImRvbWFpbiI6IkxvY2FsIFVzZXJzIiwidXNlcl9pZCI6IjYiLCJhdXRoX3RpbWUiOjE0NjM1OTQ5NDEsImlzcyI6Imh0dHBzOi8vdmlkbTIucHNnLmxhbi9TQUFTL2F1dGgiLCJhdWQiOiJodHRwczovL3ZpZG0yLnBzZy5sYW4vU0FBUy9hdXRoL29hdXRodG9rZW4iLCJjdHgiOiJbe1wibXRkXCI6XCJ1cm46b2FzaXM6bmFtZXM6dGM6U0FNTDoyLjA6YWM6Y2xhc3NlczpQYXNzd29yZFByb3RlY3RlZFRyYW5zcG9ydFwiLFwiaWF0XCI6MTQ2MzU5NDk0MSxcImlkXCI6NH1dIiwic2NwIjoiYWRtaW4iLCJpZHAiOiIwIiwiZW1sIjoiT0F1dGhDbGllbnRfYXBwcm92YWxAbm9yZXBseS5jb20iLCJjaWQiOiJhcHByb3ZhbCIsImRpZCI6IiIsIndpZCI6IiIsImV4cCI6MTY1MjgxMDk0MSwiaWF0IjoxNDYzNTk0OTQxLCJzdWIiOiI2N2ZlZGViNy1lZDFjLTQ0OGUtYWUzYy1lY2RmYzhjN2I5YzQiLCJwcm5fdHlwZSI6IlNFUlZJQ0UifQ.lKtzC3TJjdO4N-N_-FPUzT-Ij9DDykvG04-Edsgp3tQWG5LRhu45xfKPbsmZHJaKY1LQeVQAb6B0mVBRLN4EsoDWh1DYjXuIKFx98Tib86PjFjjIV5QloIaVW8lX0JC29hlztnxoZbuoO6pQbAeSbTtMnUMrBeaBs9rpI8NNFEk'
              }
          }
      }

  }
};
