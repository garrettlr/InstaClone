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
    rules: [
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
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ]
  },
}
