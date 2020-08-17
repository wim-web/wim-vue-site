module.exports = {
  publicPath: '/wim-vue-site/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/sass/_variables.scss";
        `
      }
    }
  }
}