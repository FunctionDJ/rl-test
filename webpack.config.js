module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp')
          }
        }
      }
    ]
  }
}