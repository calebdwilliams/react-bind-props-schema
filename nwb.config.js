module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'REACT_BIND_PROPERTIES_SCHEMA',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    // rules: [
    //   {
    //     test: /node_modules\/lit-element/,
    //     use: {
    //       loader: 'babel-loader'
    //     }
    //   }
    // ],
    rules: {
      js: {
        include: /node_modules\/lit-element/
      }
    },
    html: {
      template: './demo/src/index.html'
    }
  }
}
