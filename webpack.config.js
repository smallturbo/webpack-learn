const { Configuration } = require("webpack")
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @type { Configuration }
 */
const config = {
    entry: './main.js',
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ]
}

module.exports = config;