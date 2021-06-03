const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output:{
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/'
    },
    // resolve: {
    //     alias: {
    //         // 'vue': 'vue/dist/vue.js'
    //         'vue': '@vue/runtime-dom'
    //     }
    // },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpeg|jpg)$/i,
                use:{
                    loader: 'url-loader',
                    options: {limit: 8192}
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            }
            
        ]
    },
    plugins: [
        //这个插件是必须的！ 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块。
        new VueLoaderPlugin(),
        // new StyleLintPlugin({
        //     files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}']
        // }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        hot: true,
        overlay: true,
        // open: true,
        contentBase: __dirname
    }
}