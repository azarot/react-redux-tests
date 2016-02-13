var webpack = require("webpack");

var buildFolderPath = "./build";

var publicPath = "http://localhost:9090/";

var config = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    entry: {
        app: ["./src/app.js"]
    },
    output: {
        path: buildFolderPath,
        publicPath: publicPath,
        filename: "app.bundle.js"
    },
    devServer: {
        host: "localhost",
        port: 9090,
        contentBase: buildFolderPath,
        inline: true,
        hot: true,
        colors: true,
        noInfo: false
    }
};

module.exports = config;
