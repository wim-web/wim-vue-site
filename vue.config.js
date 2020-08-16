module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/_sass/_variables.scss";
          @import "@/_sass/_reset.scss";
        `
      }
    }
  }
}