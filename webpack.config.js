const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const common = require('./webpack.common.js');


module.exports = merge(common, {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new CopyWebpackPlugin(['./src/service-worker.js'])
  ]
});