# webpack-react

#基于webpack+react+babel+es6

#个人配置了很久，也踩了很多坑，网上也有现有的脚手架工具，自己走一遍，对webpack的配置和问题了解更多，里面的组件是基于es6语言写的

里面大部分是基于webpack 1.x 的配置方式

git到本地后，

npm install

npm install webpack 

执行npm run dev

可以在8080端口查看项目效果


文件介绍：
app/ 资源文件夹
     index.jsx 程序文件入口
     compnents 一些组件
     utils 一些小工具文件夹
	 
build/工程项目文件夹
     build.js  程序出口文件，经过压缩，合并，嵌套后的最终生成文件
     index.html  最终生成的模板文件，可以是自定义模板，也可以是default模板。由插件HtmlwebpackPlugin生成。
	 
templates/自定义模板文件夹
     里面的html文件是自定义的，最终模板生成的html在build下面
	 
.babelrc 这个文件是用来设置转码的规则和插件的

package.json 用来配置项目依赖，还有执行命令的

webpack.config.js webpack的配置文件，里面包含了目录、项目出入口、各种loader、插件等等各种各样的配置


