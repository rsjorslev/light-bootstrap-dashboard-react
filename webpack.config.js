module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/src",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
};
