const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: ["./src/utils/polyfills.js", "./src/bootstrap-validate.js"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bootstrap-validate.js",
    library: "bootstrapValidate"
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
