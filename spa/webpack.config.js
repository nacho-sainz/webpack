const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devServer = {
  hot: true,
  open: true,
  port: 3000,
};

const configuration = {
  devServer,
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'development',
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
  output: {
    clean: true,
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
};

module.exports = configuration;
