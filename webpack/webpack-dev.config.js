/*eslint-env node*/
var webpackConfig = require('./webpack.config')
var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var path = require('path')
var gutil = require('gulp-util')

module.exports= function(){
    var devPort = 8081
    var wbpk = Object.create(webpackConfig)

    wbpk.devtool = 'eval'
    wbpk.entry={index:[path.join(process.cwd(),'example/src/index.js')]}
    wbpk.output.filename = 'example.js'
    for (var key in wbpk.entry) {
        var ar = wbpk.entry[key]

        if (key != 'common' && key!='dev') {
            ar.unshift('webpack-dev-server/client?http://127.0.0.1:'+devPort , 'webpack/hot/dev-server')
        }
    }
    wbpk.externals = []
    wbpk.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )

    wbpk.module.loaders=[
        /*{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.svg$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.woff|ttf|woff2|eot$/,
            loader: 'url?limit=100000'
        },
        {
            test: /\.css$/,
            loader: 'style!css?-restructuring'
        }*/
        {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },
        {
            test: /\.svg$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.woff|ttf|woff2|eot$/,
            loader: 'url?limit=100000'
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            loaders: ['url?limit=35000']
        }
    ]

    var compiler = webpack(wbpk)

    new WebpackDevServer(compiler, {
        publicPath: '/dist/',
        contentBase:path.join(process.cwd(),'example/'),
        hot: true,
        historyApiFallback: true,
        port: devPort,
        stats: {
            colors: true
        }
    }).listen(devPort, '127.0.0.1', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err)
    })
}
