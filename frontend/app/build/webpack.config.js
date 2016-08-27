/**
 * This is the [Webpack](https://webpack.github.io) configuration object.
 * Various configuration options are defined, including:
 * - 'loaders' which define how specific types of files are transformed
 * - 'plugins' hook into the core build process of Webpack
 * Babel is used as a loader to transform ES6 -> ES5 for cross-browser
 * compatibility.
 */

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssColorFunctions = require('postcss-color-function');
const postcssSimpleVars = require('postcss-simple-vars');
const config = require('../config');

// Shared Webpack config.
let webpackConfig = {
  output: {
    path: path.join(__dirname, '../public/webpack/'),
    filename: 'bundle.js',
    publicPath: '/webpack/',
  },

  module: {
    loaders: [
      // For a list of loaders see [Webpack Loaders](https://webpack.github.io/docs/loaders.html)
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      // TODO: Disable CSS sourcemaps in production.
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader?sourceMap=inline'),
        exclude: [/node_modules/],
      },
    ],
  },

  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
    postcssMixins(),
    postcssSimpleVars(),
    postcssColorFunctions(),
    postcssNested(),
  ],

  // For compatibility with enzyme when reading from compiled Webpack bundle.
  // externals: {
  //   'react/addons': true,
  //   'react/lib/ExecutionEnvironment': true,
  //   'react/lib/ReactContext': true,
  // },

};

// NON-PRODUCTION Webpack config (e.g for development or testing).
if (config.env !== 'production') {
  const webpackDevConfig = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'webpack-hot-middleware/client',
      './app/src/routes.react.js',
    ],
    plugins: [
      // For plugin info see [list of plugins](https://webpack.github.io/docs/list-of-plugins.html)
      new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        API_MODE: JSON.stringify(config.API_MODE),
        API_ROOT: JSON.stringify(config.API_ROOT),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
    ],
  };

  webpackConfig = Object.assign(webpackConfig, webpackDevConfig);
}

// PRODUCTION ONLY Webpack config.
if (config.env === 'production') {
  const webpackProdConfig = {
    entry: [
      './app/src/routes.react.js',
    ],
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
        API_MODE: JSON.stringify(config.API_MODE),
        API_ROOT: JSON.stringify(config.API_ROOT),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
      }),
    ],
  };

  webpackConfig = Object.assign(webpackConfig, webpackProdConfig);
}

module.exports = webpackConfig;
