const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');

    module.exports = {
      entry: './src/main.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devtool: 'eval-source-map',
      devServer: {
        contentBase: './dist'
      },
      plugins: [
          new UglifyJsPlugin({ sourceMap: true }),
          new CleanWebpackPlugin(['dist']),
          new Dotenv(),
          new HtmlWebpackPlugin({
           title: 'Your Page Name',
           template: './src/index.html',
           inject: 'body'
           })
         ],
      module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
            },

          ]
        }
      };
