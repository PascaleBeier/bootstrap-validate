const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../docs"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../docs"),
    filename: ".build"
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        include: path.join(__dirname, "../docs"),
        exclude: path.join(__dirname, "../node_modules"),
        use: [
          { loader: "file-loader", query: { name: "[name].html" } },
          { loader: "pug-html-loader", query: { pretty: true, exports: false } }
        ]
      }
    ]
  }
};
