//const path = require("path");

module.exports = {
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .options({
              // Provide path to the file with resources
              resources: './src/assets/scss/config.scss'
            })
            .end()
        })
      },
    devServer: {
        host: 'localhost',
        port: 8080,
        // proxy: {
        //     '/api': {
        //         target: '',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '/api': ''
        //         }
        //     }
        // }
    }
}