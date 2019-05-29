// configure webpack for development environment
/**
 *use commonjs
 *node does not support es6
 */
const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

// declare node environment
process.env.NODE_ENV = "development";

// configure webpack by exporting js object
module.exports = {
  mode: "development",
  target: "web", // working in the browser
  devtool: "cheap-module-source-map", // source maps allow us to see our original code in the browser for debugging
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/", // public url of output directory when referenced in the browser
    filename: "bundle.js" // html will reference this file from memory
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
