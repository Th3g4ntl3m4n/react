const path = require('path'); //Modulo de node
const HtmlWebpackPlugin = require('html-webpack-plugin'); //instanciamos el plugin que instalamos
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//cramos un nuevo modulo
module.exports = {  
  entry: './src/index.js', //hacemos referencia al archivo principal
  output: { //donde vamos a guardar los archivos resultantes
    path: path.resolve(__dirname, 'dist'), //donde se va a guardar
    filename: 'bundle.js', //le ponemos nombre al archivo ppal
  },
  resolve: { //resolvemos las extenciones que vamos a uitilizar en el proyecto
    extensions: ['.js', '.jsx'],
  },
  module: { //modulo con las reglas necesarias para nuestro proyecto
    rules: [
        
      {
        test: /\.(js|jsx)$/, //expresion regular para identificar ar5chivos js y jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            'css-loader',
            'sass-loader'
        ]
      }
    ],
  },

  //agragamos los plugin que vamos a requerir
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename:'assets/[name].css'
    })
  ],
};