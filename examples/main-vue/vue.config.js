// vue.config.js
const {codeInspectorPlugin} = require('code-inspector-plugin');
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: process.env.NODE_ENV === "development",
    port: "8000",
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
