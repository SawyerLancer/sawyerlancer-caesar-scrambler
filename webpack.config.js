const webpack = require("webpack");
const path = require('path');

module.exports = {
  
  entry: {
    "bundle": "./lib/index.js",
  },
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.min.js"
  },
};