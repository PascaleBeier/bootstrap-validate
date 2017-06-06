const path = require('path');

module.exports = {
  entry: './src/bootstrap-validate.js',
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
        exclude: '/node_modules/',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
      },
    ],
  },
};
