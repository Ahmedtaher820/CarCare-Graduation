var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__direname, "./dist"),
    publicPath: "/dist/",
    Filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        option: {},
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node-module/,
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.common.js",
    },
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    devtool: "#eval-source-map",
  },
};
if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production",
      },
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //   },
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ]);
}
