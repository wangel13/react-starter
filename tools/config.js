var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'), // Точка входа
  output: {
    path: path.resolve(__dirname, '../build'),     // Точка выхода
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /src\/.+.js$/,      // Используем регулярное выражение для того, чтобы "пройтись" по всем js файла проекта
        exclude: /node_modules/,  // Исключаем папку
        loader: 'babel'           // Используем лоадер ES6
      }
    ]
  }
}
