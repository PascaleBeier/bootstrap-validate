const path = require("path");

const outputPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",
  entry: require.resolve("./src/bootstrap-validate.js"),
  resolve: {
    extensions: [".js"],
  },
  output: {
    path: outputPath,
    filename: "bootstrap-validate.js",
    library: {
      name: "bootstrapValidate",
      type: "umd",
      export: "default",
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel-loader",
      },
    ],
  },
};
