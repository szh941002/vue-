
const path = require('path');
const htmlPW = require('html-webpack-plugin');
const clearPW = require('clean-webpack-plugin');

// 暴露接口
module.exports = {
    // 入口
    entry: path.resolve(__dirname, './src/js/main.js'),
    // 输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    // 插件配置  数组形式
    plugins: [
        new htmlPW({
            template: path.resolve(__dirname, './src/index.html'),  // 要处理的html
            filename: 'index.html',         // 处理后的html名称
            inject: 'body',                               // 自动注入js到什么地方
        }),
        // 每次打包前先清除dist目录
        new clearPW(['./dist'])
    ],
    // 配置模板
    module: {
        //  配置loader
        rules: [
            // 打包css模板
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 打包less模板
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // url静态资源文件
            {
                test: /\.(png | jpg | gif | jpeg | svg)$ /,
                // 指定小于10kb的图片才转为base64编码打包
                use: [{ loader: 'url-loader', options: { limit: 10240 } }]
            },
            // 转换js模板,
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/  // 如果项目引入了node-modules的东西,不转换它们
            },
            // 配置vue
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    // 全局配置 webpack-dev-server
    devServer : {
        contentBase: 'dist',
        port: 8842,
        open: true,
        inline: true
     
    }
}