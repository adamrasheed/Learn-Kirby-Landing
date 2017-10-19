// webpack.config.js
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname+'/app',
  devtool: debug ? "inline-sourcemap" : null,
  entry: ['./js/main.js', './styles/main.scss'],
  module: {
      rules: [
        {
            test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
            use: 'file',
        },
        { // sass loader
            test: /\.(sass|scss)$/,
            // loader
            loaders: [ 'styles', 'css', 'sass' ],
            use: ExtractTextPlugin.extract([
                'css-loader',
                'sass-loader'
            ])
        }
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "main.min.js"
  },
  plugins: debug ? [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
    new CopyWebpackPlugin([{
        from: 'assets/**/*',
        to: './'
    }]),

    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    }),

    new ExtractTextPlugin({
        filename: 'dist/main.css',
        allChunks: true,
    }),

  ] : [

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new webpack.HTMLWebpackPlugin({
        title: 'my app',
        template: 'index.html'
    }),
    new CopyWebpackPlugin([{
        from: 'assets/**/*',
        to: './'
    }]),
  ],
};