module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/time-tracking-dashboard/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/styles.sass";`
      }
    }
  }
};