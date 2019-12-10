const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  entry: [
    '@babel/polyfill',
    './src/app/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[hash].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/app/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
