const path = require('path');

module.exports = {
  entry: [
    './src/utils/polyfills.js',
    './src/bootstrap-validate.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bootstrap-validate.js',
    library: 'bootstrapValidate',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules'),
        loader: 'babel-loader',
      },
    ],
  },
};
