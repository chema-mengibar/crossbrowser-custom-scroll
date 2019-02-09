const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'production',
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
          { loader:  MiniCSSExtractPlugin.loader },
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
    }),
    new MiniCSSExtractPlugin({
      filename: "assets/css/app.css"
    })
  ]
};
