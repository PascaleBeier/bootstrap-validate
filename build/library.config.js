const path = require("path");

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "../"),
  entry: "./src/bootstrap-validate.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bootstrap-validate.js",
    library: "bootstrapValidate",
    libraryTarget: "umd",
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, "../src"),
        exclude: path.join(__dirname, "../node_modules"),
        loader: "babel-loader"
      }
    ]
  }
};
