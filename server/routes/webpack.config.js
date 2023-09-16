const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest'); // Add this line

module.exports = {
  // Your Webpack configuration settings...
  plugins: [
    // Other plugins...
    new HtmlWebpackPlugin({
      template: 'src/index.html', // Path to your HTML template file
      filename: 'index.html', // Name of the output HTML file
    }),
    new WebpackPwaManifest({
      name: 'Your App Name',
      short_name: 'App Name',
      description: 'Description of your app',
      // Add more options as needed
      // For example, icons, background color, display mode, etc.
      icons: [
        {
          src: 'path/to/icon.png',
          sizes: [96, 128, 192, 256, 384, 512], // Adjust sizes as needed
        },
      ],
      // Other options...
    }),
  ],
};
