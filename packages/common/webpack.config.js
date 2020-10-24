const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin ()],
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  output: {
    filename: "index.js",
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "lib"),
  },
  optimization: {
    minimize: false
  }
};
