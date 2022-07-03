const path = require('path');

const configuration = {
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
};

module.exports = configuration;
