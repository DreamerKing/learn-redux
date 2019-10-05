const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "eval-source-map",
    context: path.resolve(__dirname),
    entry: [path.join(__dirname, 'src/index.js')],
    output: {
        filename: "[name]-[hash]-[id].js",
        chunkFilename: "[name]-[chunkhash]-[id].js",
        path: path.join(__dirname, "dist"),
        // publicPath: "/",
        pathinfo: true
    },
    resolve: {
        extensions: ['.js', '.css'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: "babel-loader"
        },{
            test: /\.css$/,
            use: [
               "style-loader",
               "css-loader" 
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Learn redux",
            filename: "index.html",
            template: "src/index.html",
            favicon: "./favicon.ico",
            inject: true
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 9000,
        clientLogLevel: "error",
       // host: "localhost",
        open: true,
        historyApiFallback: true,
      //  mimeTypes: { }
    }
}