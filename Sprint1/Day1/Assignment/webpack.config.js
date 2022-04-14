const path = require('path');

module.exports = {
  mode: "production", // either development or production
  entry: "./src/index.js",
  output: {
    path:path.resolve(".", "build"), //folder
    filename: "bundle.js", // filename string (default)
    },
  module: {
    rules: [
        {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
      ],
    },
};