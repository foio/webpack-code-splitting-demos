var webpack = require("webpack");
module.exports = {
  entry: {
    app: "./app.js",
    vendor: ["lodash","jquery"],
  },
  output: {
    path: "release",
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({names: ["vendor"]})
  ]
};
