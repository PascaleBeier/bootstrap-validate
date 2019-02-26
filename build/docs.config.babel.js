const path = require("path");
const rules = require("./../src/rules");
const constants = require("./../src/constants");
const docblock = require("docblock-parser");
const meta = require("./../package.json");
const semver = require("semver");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, "../docs"),
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "../docs/assets"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, "../node_modules"),
        loader: "babel-loader"
      },
      {
        test: /\.pug$/,
        include: path.join(__dirname, "../docs"),
        exclude: path.join(__dirname, "../node_modules"),
        use: [
          { loader: "file-loader", query: { name: "./../[name].html" } },
          {
            loader: "pug-html-loader",
            options: {
              basedir: path.join(__dirname, "../"),
              data: { docblock, rules, meta, semver, constants }
            }
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "main.css" })]
};
