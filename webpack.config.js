const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
  entry: './scr/js/main.js',
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',  
    hot: false,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'scr', 'index.html'),
    filename: 'index.html',
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  new CopyWebpackPlugin({
    patterns: [
      { from: 'scr/images', to: 'images' },  
    ],
  }),
],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
// optimization: {
//     runtimeChunk: 'single',
// }
};