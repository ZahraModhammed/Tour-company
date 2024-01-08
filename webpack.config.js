const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');


module.exports = {
   mode:"development",
   entry:{
     app:'./src/js/index.js',
   },
   output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
   },

   devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: false,
    open: true,
    port: 9000,
    devMiddleware:{
        writeToDisk: true,
      }
  },

  module:{
    rules:[
        {
            test: /\.html$/i,
            loader: "html-loader",
            options: {
                minimize: true,
                // sources:false
              },
          },

          {
            test:  /\.(sass|css|scss)$/,
           
            use: [
              {
              loader: MiniCssExtractPlugin.loader, 
              options: {
              publicPath:'../'
            },
          },
            "css-loader",
            "sass-loader",
           
            ],
        },

        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource',
  
          generator: {
            filename: 'images/[name].[ext]',
          },
        },
  
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/i,
          type: 'asset/resource',
          generator: {
            filename: './fonts/[name][ext]',
          },
        },
            
            
    
          
    ]

  
  },

  plugins: [
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"index.html",
    }),
    
    new MiniCssExtractPlugin({
      filename:"css/style.css"
    }),
   
  ],

}