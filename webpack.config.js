const path = require('path');

module.exports = {
  entry: './src/Exercicio1/atv1.js', // ou outro arquivo principal que queira buildar
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // pasta de saída do build
  },
  mode: 'production', // 'development' para dev, 'production' para build final
  module: {
    rules: [
      {
        test: /\.css$/,  // para carregar CSS com style-loader e css-loader
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',  // se usar Babel (opcional)
      },
    ],
  },
}