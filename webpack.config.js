var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var webpack=require('webpack');
//Template的文件夹路径
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry:{
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    // filename: 'bundle.[hash].js'
    filename: 'bundle.js'
  },
  devServer:{
    historyApiFallback: true,
    inline: true,
    proxy: {
          '/api/*': {
              target: 'http://localhost:5000',
              secure: false
          }
        }
  },
  devtool: 'eval-source-map',
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=40000'},
      { test: /\.js|jsx$/, loader: "babel-loader",include: APP_PATH}
    ],
    
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'my app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app'],
      //要把script插入到标签里
      inject: 'body',
      hash:true
    }),
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),

  ],



};

