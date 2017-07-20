const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        include: [
          path.join(__dirname, "../spec"),
          path.join(__dirname, "../src")
        ],
        exclude: path.join(__dirname, "../node_modules"),
        loader: "babel-loader"
      }
    ]
  }
};
