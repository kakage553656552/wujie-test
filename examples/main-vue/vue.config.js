// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const { codeInspectorPlugin } = require('code-inspector-plugin');
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/demo-main-vue/" : "/",
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    open: process.env.NODE_ENV === "development",
    port: "8000",
  },
  lintOnSave: false,
  configureWebpack: config=>{
    config.plugins.push(new codeInspectorPlugin({
      bundler: 'webpack',
    }));
  }
};
