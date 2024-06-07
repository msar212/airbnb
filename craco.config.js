const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // webpack 配置
  webpack: {
    alias: {
      '@': resolve('src/'),
      'components': resolve('src/components/'),
      'utils': resolve('src/utils/'),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  // 插件配置
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
};
