const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
module.exports = {
  entry: {
    index: __dirname + '/src/pages/home/home.js',
    about: __dirname + '/src/pages/about/about.js',
    contacts: __dirname + '/src/pages/contacts/contacts.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]bundle.js",
    publicPath: '/',
    assetModuleFilename: 'assets/images/[name][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/pages/home/home.html',
      inject: 'body',
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/pages/about/about.html',
      inject: 'body',
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/pages/contacts/contacts.html',
      inject: 'body',
      chunks: ['contacts'],
      filename: 'contacts.html'
    }),
    new HtmlWebpackPartialsPlugin({
        path: path.join(__dirname, './src/partials/footer/footer.html'),
        location: 'footer',
        template_filename: ['index.html','about.html','contacts.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/navbar/navbar.html'),
      location: 'navbar',
      template_filename: ['index.html','about.html','contacts.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, './src/partials/map/map.html'),
      location: 'map',
      template_filename: ['index.html','about.html','contacts.html']
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ],
  },
};
