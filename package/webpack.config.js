const path = require('path');

const configuration = {
  entry: path.resolve(__dirname, './index.js'),
  mode: 'production',
  output: {
    clean: true,
    filename: 'index.js',
    globalObject: 'this', // This is needed if we are going to run the code in browsers directly, or with node
    library: {
      name: 'phone',
      type: 'umd',
    },
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = configuration;
