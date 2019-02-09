const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development'
  externals: {

  },
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
				test: /\.(scss|css)$/,
				use: [
          {	loader: 'style-loader'},
					{	loader: 'css-loader'	},
					{	loader: 'sass-loader'	}
				]
			}
    ]
  },
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/base.html',
    })
  ]
};
