let webpack = require('webpack');
let path = require('path');
let CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

let lifecycleEvent = process.env.npm_lifecycle_event;

let devConfig = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        publicPath: 'http://localhost:8080/',
        path: path.resolve('./static'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    resolve: {
      modules: ['web_modules', 'node_modules'],
      extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                use: ['eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.(ttf|woff|woff2|otf)$/,
                use: 'url-loader'
            },
            {
                test: /\.(eot|png|jpg|jpeg|gif|woff|svg)$/,
                use: 'file-loader'
            },
            {
                test: [/\.scss$/],
                use: ExtractTextPlugin.extract('css-loader!sass-loader'),
                include: [path.join(__dirname, './src/styles')]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/[name].css',
            allChunks: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './static',
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                xfwd: true,
                changeOrigin: true
            }
        }
    }
};

let buildConfig = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        publicPath: 'http://localhost:8080/',
        path: path.resolve('./dist'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                use: ['eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|svg|otf|eot)$/,
                use: 'file-loader'
            },
            {
                test: [/\.scss$/],
                use: ExtractTextPlugin.extract('css-loader!sass-loader'),
                include: [path.join(__dirname, './src/styles')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new ExtractTextPlugin({
            filename: './css/[name].css',
            allChunks: false
        }),
        new CleanWebpackPlugin(['build/js']),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                xfwd: true,
                changeOrigin: true
            }
        }
    }
};

switch (lifecycleEvent) {
    case 'build':
    module.exports = buildConfig;
    break;
    default:
    module.exports = devConfig;
    break;
}
