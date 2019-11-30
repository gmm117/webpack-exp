// __dirname, path module
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : './index.js',
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : '[name]].[chunkhash].js'
    },
    module : {
        rules : [
            {
                test : /\.css$/i,
                use : [
                    // {
                    //     loader : 'style-loader', // 여러 스타일 태그를 하나로 합쳐준다.
                    //     options : {
                    //         injectType : 'singletonStyleTag'
                    //     }
                    // },
                    {
                        loader : MiniCssExtractPlugin.loader
                    },
                    {
                        loader : 'css-loader', // 스타일을 header 태그에 추가해주는 역할
                        options : {
                            modules : true
                        }
                    }
                ]
            }, 
            {
                test : /\.hbs$/i,
                use : ['handlebars-loader']     
            }
        ]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : '[contenthash].css'
        }),
        new HtmlWebpackPlugin({
           // 특정파일을 기준으로 자동으로 html 문서를 생성해주는 역할 
           // body tag에 script로 자동으로 생성해준다.
           title : 'webpack',
           template: './template.hbs',
           meta : {
              viewport : 'width=device-width, initial-scale=1.0'
           }
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        runtimeChunk : {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test : /[\\/\]node_modules[\\/]/,
                    name : 'venders',
                    chunks: 'all'
                }
            }
        }
    },
    mode: 'none'
};