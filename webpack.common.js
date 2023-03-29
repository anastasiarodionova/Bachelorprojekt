const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BROWSERS = [
  'last 2 chrome versions',
  'last 2 safari versions',
  'last 2 firefox versions',
  'last 2 edge versions',
];

module.exports = {
  entry: {
    'main.js': './src/main.js',
    'index.js': './src/index.js',
    'app.js': './src/server/routes/app.js',
    'get-data.js': './src/server/routes/get-data.js',
    'router.js': './src/server/routes/router.js',
    'product_main.js': './src/client/js/product-main.js',
    'cart.js': './src/services/cart.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              targets: {
                browsers: BROWSERS,
              },
              modules: false,
            }],
          ],
          plugins: ['syntax-dynamic-import'],
          babelrc: false,
        },
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({use: 'css-loader'}),
    }],
  },
  output: {
    filename: 'js/[name]',
    chunkFilename: 'js/chunk-[name]',
    path: path.resolve(__dirname, 'dist/static'),
  },
  plugins: [
    new ExtractTextPlugin('styles/style.css'),
  ],
};
