const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");
var PACKAGE = require('../package.json');
var version = PACKAGE.version;

module.exports = {
  // mode: "production",    //-->This is passed as runtime env
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    path: path.resolve(__dirname, `../../script/${version}`),
    filename: "index_bundle.js",
    library: "$",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
