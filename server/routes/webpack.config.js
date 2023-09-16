const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Your Webpack configuration settings...
  plugins: [
    // Other plugins...
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Path to your HTML template file
      filename: 'index.html', // Name of the output HTML file
    }),
  ],
};
