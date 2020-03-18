module.exports = {
  chainWebpack: config => {
    config.module.rule('vert').test(/\.vert$/).use('raw-loader').loader('raw-loader')
    config.module.rule('frag').test(/\.frag$/).use('raw-loader').loader('raw-loader')
  }
}
