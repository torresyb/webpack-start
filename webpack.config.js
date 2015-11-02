'use strict';

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['webpack/hot/dev-server' , path.join(__dirname,'jsmin/entry.js')],
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: "js/",
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module:{
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loader: "uglify!babel"},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
            {test: /\.scss$/, loader: "style!css!sass!autoprefixer?{browsers:['last 2 version', '> 1%']}"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin("[name].css")
    ]
};