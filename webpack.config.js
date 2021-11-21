const path = require('path');
//load all .ts and .tsx files through the ts-loader, and output a bundle.js file in our current directory.
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map', //tell webpack to extract these source maps and include in our final bundle:
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
