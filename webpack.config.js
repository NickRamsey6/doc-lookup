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
             'css-loader',
           ],
         },
         {
           test: /\.js$/,
           exclude: [
             /node_modules/,
             /spec/
           ],
           loader: "babel-loader",
           options: {
             presets: ['es2015']
           }
         },
         {
           test: /\.(gif|png|jpe?g|svg|bmp|.mp3)$/,
           use: [
             {
               loader: 'file-loader',
               options: {
                 name: '[name].[ext]',
                 outputPath:
               }
             }
           ]
         },
         {
           test:/\.html$/,
           use: [
             'html-loader'
           ]
         },
         {
           test: /\.mp3$/,
           loader: 'file-loader'
         },
       ],
     },
   };
