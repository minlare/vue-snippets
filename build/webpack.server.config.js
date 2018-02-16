const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  target: 'node',
  context: path.resolve(__dirname, '../'),
  entry: {
    server: './src/server.js'
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'wwwroot/dist'),
    filename: 'bundle.server.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.json?$/,
        loader: 'json'
      }
    ]
  }
}
