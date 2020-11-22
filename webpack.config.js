const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@app': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@node': path.resolve(__dirname, './node_modules'),
    },
  },
}
