const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/main.js'),
  },
  output: {
    path: path.join(__dirname, "../dist/scripts"),
    filename: "[name].[contenthash].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Mrs Wei\'s teaching toys. 😊 (development)',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ESLintWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true,
  }
};
