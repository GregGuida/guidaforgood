const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      path: path.resolve(__dirname, "static", "css")
    })
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "static", "js")
  }
};

module.exports = config;
