

module.exports = {
  entry: './demo/app.js',
  output: {
    filename: 'app.bundle.js',
    path: __dirname + '/demo/js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              "targets": {
                "browsers": ['> 0.25%', 'last 5 versions']
              },
              "debug": false
            }]
          ]
        }
      }
    }]
  }
};