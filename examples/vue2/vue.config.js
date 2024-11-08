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
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "*",
    },
    port: "7200",
  },
  transpileDependencies: [
    "sockjs-client",
  ],
  chainWebpack: (config) => {
    config.plugin('conde-inspector-plugin').use(
      codeInspectorPlugin({
        bundler: 'webpack',
      })
    )
  }
};
