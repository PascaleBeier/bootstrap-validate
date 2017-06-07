const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: '.build'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', query: { name: '[name].html' } },
          { loader: 'pug-html-loader', query: { pretty: true, exports: false } }
        ]
      }
    ]
  }
};
