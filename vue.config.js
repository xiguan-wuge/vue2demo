const { defineConfig } = require('@vue/cli-service');
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
const path = require('path');

const WconsoleTagPlugin = require('./src/plugins/WconsoleTagPlugin');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolveLoader: {
      modules: ['node_modules', './src/loaders/'],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          utils: {
            test: /[\\/]src[\\/]utils[\\/]/,
            name: 'utils',
            chunks: 'all',
            enforce: true,
          },
          style: {
            test: /[\\/]src[\\/]assets[\\/]style[\\/]/,
            name: 'style',
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    module: {
      // rules: [
      //   {
      //     test: /\.vue$/,
      //     loader: 'wconsole-vue-loader',
      //     exclude: /node_modules/,
      //   },
      //   {
      //     test: /\.js$/,
      //     loader: 'wconsole-js-loader',
      //     exclude: /node_modules/,
      //   },
      // ],
    },
    plugins: [
      // new WconsoleTagPlugin()
      // new PrerenderSPAPlugin({
      //   staticDir: path.join(__dirname, 'dist'),
      //   routes: ['/']
      // })
    ],
  },
});
