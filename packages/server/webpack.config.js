const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: path.resolve (__dirname, 'src/index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    plugins: [new TsconfigPathsPlugin ()]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [
    nodeExternals ({
      whitelist: ["@tripplanner/core"]
    })
  ],
  plugins: [
    new webpack.DefinePlugin ({
      "process.env": { NODE_ENV: '"production"' }
    })
  ]
};
