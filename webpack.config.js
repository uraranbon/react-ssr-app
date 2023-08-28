const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //CSS出力

module.exports = {
  target: 'node',
  entry: './server/index.js', // 読み込むファイル
  output: {
    path: path.resolve(__dirname, 'dist'), //アウトプット先
    filename: 'bundle.js', //アウトプットするファイル名
    publicPath: '/',
  },
  externals: [nodeExternals()],
  mode: 'development', // 開発 development モードまたは本番 production モード
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx',],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
};