const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

const assetsPluginInstance = new AssetsPlugin({
  path: path.join(__dirname, "dist")
});

const optionsDev = {
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve("dist"),
    hot: true,
    port: 3838,
    headers: { "Access-Control-Allow-Origin": "*" },
    overlay: true,
    publicPath: "/",
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[contenthash].js",
    publicPath: "http://localhost:3838/"
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true, title: "Webpack" }),
    new webpack.HotModuleReplacementPlugin(),
    assetsPluginInstance
  ],
  optimization: {
    namedModules: true,
    splitChunks: {
      chunks: "all"
    },
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        include: path.resolve(__dirname, "src"),
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "node_modules",
                ".cache",
                ".cache-loader"
              )
            }
          },
          {
            loader: "thread-loader"
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          }
        ],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader",
        options: {
          limit: 100000
        }
      }
    ]
  }
};

module.exports = optionsDev;
