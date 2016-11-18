var webpack = require("webpack");
module.exports = {
    entry: { 
          page1: "./page1.js", 
          page2: "./page2.js" 
        },
    output: { 
          path: "release",
          filename: "[name].[chunkhash].js" 
        },
    plugins: [ new webpack.optimize.CommonsChunkPlugin("common.[chunkhash].js") ]
}
