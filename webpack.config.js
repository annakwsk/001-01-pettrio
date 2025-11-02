const path = require("path");
const webpack = require("webpack");
const NODE_ENV = process.env.NODE_ENV ? "development" : "production";

module.exports = {
  mode: "production",
  context: __dirname + "/src",
  entry: {
    "assets/js/libs": "./assets/js/libs.js",
    "assets/js/app": "./assets/js/app.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname + "/build/"),
    publicPath: "./js/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    loose: true,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
