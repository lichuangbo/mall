module.exports = {
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        '@': src,
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}