// webpack.config.js
var debug = process.env.NODE_ENV !== "production";

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  context: __dirname+'/app',
  devtool: debug ? "inline-sourcemap" : null,
  entry: './js/main.js',

  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "main.min.js",
    // publicPath: '/dist'
  },

  module: {
      rules: [
        { // sass loader
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
                publicPath: '/dist/'
            })
        },
        {
            test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
            use: 'file-loader'
        }
    ]
  },


  plugins: debug ? [
    new HtmlWebpackPlugin({
        hash: true,
        template: 'index.html'
    }),
    new CopyWebpackPlugin([
        { from: 'assets/**/*' }
    ]),

    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    }),

    new ExtractTextPlugin({
        filename: 'main.css',
        disable: false,
        allChunks: true,
    }),

  ] : [

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.HTMLWebpackPlugin({
        title: 'my app',
        minify: {
            collapseWhitespace: true
        },
        template: 'index.html'
    }),
    new CopyWebpackPlugin([{
        from: 'assets/**/*',
        to: './'
    }]),
  ],
};