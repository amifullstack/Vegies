const { resolve } = require('path');
const webpack = require('webpack');


module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch', // RHL path
    'react-hot-loader/babel',
    'webpack-hot-middleware/client',
    './index.js', // app entry point
  ],
  output: {
    filename: 'build.js',
    path: '/',
    publicPath: '/js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|public\/)/,
        loader: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

