const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: "development",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { targets: "defaults" }
              ],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.(css)$/,
        include: path.resolve(__dirname, 'src'),
        use: ["style-loader", "css-loader"],
      }
    ]
  },
};