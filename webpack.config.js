const { Configuration } = require("webpack")
const path = require("path")
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
}

module.exports = config;