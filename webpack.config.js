var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  // 入口文件
  entry: path.join(__dirname, 'app/index.js'),
  output: {
    filename: 'index.js',
    path:path.join(__dirname, './dist'),
    publicPath:'/'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:[
          {
            loader:"babel-loader",
          }
        ]
      },
      {
        test:/\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          // 指定特定的ts编译配置，为了区分脚本的ts配置
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      },
      {
        test:/\.(less|css)$/,
        use:[
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true, // 启用cssModules
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,//为true,在样式追溯时，显示的是编写时的样式，为false，则为编译后的样式
            }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test:/.(png|svg|jpg)$/,
        use:[
          // {
          //   loader: "file-loader",
          //   options: {
          //   }
          // },
          {
            loader: "url-loader",
            options: {
                limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 清理dist文件夹
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'app/index.html')
    })
  ],
  resolve:{
    extensions: ['.js', '.json', '.ts', '.tsx'],
    alias:{
      '@components' : path.join(__dirname, 'app/components'),
      '@pages' : path.join(__dirname, 'app/pages'),
      '@configs' : path.join(__dirname, 'app/configs')
    }
  },
  devServer: {
    contentBase:path.join(__dirname, './dist'),
    host:'localhost',
    historyApiFallback: true,
    compress:true,
    port:1717
  }
}