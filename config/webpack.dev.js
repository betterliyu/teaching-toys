var path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "../dist/scripts"),
    filename: "bundle.main.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
