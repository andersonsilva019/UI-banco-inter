const { override, addWebpackPlugin } = require('customize-cra');
// const {alias, configPaths} = require('react-app-rewire-alias')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  isDevelopment && addWebpackPlugin(new ReactRefreshWebpackPlugin()),
);
