const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './static'
  },
  entry: [
    'react-hot-loader/patch',
    './index.js',
  ],

  output: {
    path: path.join(__dirname, '/build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        query: {
          presets: ['es2015', 'react']
        },
        include: __dirname,
      },
      {
        test: /(\.css|.scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
}
