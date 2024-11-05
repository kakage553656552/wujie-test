// vue.config.js

const {codeInspectorPlugin} = require('code-inspector-plugin');

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "./",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: "7300",
  },
  chainWebpack: (config) => {
    config.plugin('conde-inspector-plugin').use(
      codeInspectorPlugin({
        bundler: 'webpack',
      })
    )
  }
};
