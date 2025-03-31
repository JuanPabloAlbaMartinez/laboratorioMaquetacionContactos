const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Detecta archivos .scss
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", // Inyecta el CSS en el DOM
          "css-loader", // Interpreta los archivos CSS
          "sass-loader", // Compila SASS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css", // Nombre del archivo CSS generado
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
};
