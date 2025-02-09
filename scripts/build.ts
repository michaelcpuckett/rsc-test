const path = require("path");
const webpack = require("webpack");
const ReactServerWebpackPlugin = require("react-server-dom-webpack/plugin");

webpack(
  {
    mode: "development",
    entry: [path.resolve(__dirname, "../src/index.tsx")],
    output: {
      path: path.resolve(__dirname, "../public"),
      filename: "main.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new ReactServerWebpackPlugin({ isServer: false })],
  },
  (error: unknown) => {
    if (error) {
      console.error(error);
    }
  }
);
