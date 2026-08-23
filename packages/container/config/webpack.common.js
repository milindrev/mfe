const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/, // 1. FIXED: Added jsx to the regex
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // 2. FIXED: Added runtime automatic to prevent React UMD errors
            presets: [
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-env",
            ],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".mjs"], // 3. FIXED: Allows importing files without writing the extension
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
