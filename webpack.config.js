const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// データを読み込む// データをまとめて読み込む
const siteData = require("./src/data/data.js"); // すべてのデータを読み込む

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.[contenthash].js", // ハッシュ付きのファイル名
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
      },
      devServer: {
        static: path.resolve(__dirname, "dist"), // サーバーのルートディレクトリ
        compress: true, // gzip圧縮を有効化
        port: 3000, // ローカルサーバーのポートを指定
        open: true, // ブラウザを自動で開く
        hot: true, // ホットリロードを有効化
        watchFiles: ["src/**/*"], // 監視対象のファイル
      },
      mode: "production",
    module:{
        rules: [
            {
              test: /\.(scss|sass|css)$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: "postcss-loader",
                    options: {
                      postcssOptions: {
                        plugins: [require("autoprefixer")],
                      },
                    },
                  },
                "sass-loader"],
            },
            {
                test: /\.ejs$/,
                use: [
                  "html-loader",
                  {
                    loader: "template-ejs-loader",
                    options: {
                      root: path.resolve(__dirname, "src/views"),
                      data: siteData // まとめたオブジェクトをそのまま渡す
                    },
                  },
                ],
            },

          ],
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: "css/style.[contenthash].css",
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/img", to: "img" },
              { from: "src/video/video-bg.mp4", to: "video/video-bg.mp4" },
              { from: "src/favicon.ico", to: "favicon.ico" } // faviconをルートにコピー
            ],
          }),

          new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/views/index.ejs",

          })

      ],
}
