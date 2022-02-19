const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  // mode: "development",   //-->This is passed as runtime env
  entry: path.resolve(__dirname, "../src/index.ts"),
  output: {
    path: path.resolve(__dirname, "../dist"),
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
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
};
