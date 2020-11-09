module.exports = {
  eslint: {
    // enable: false,
  },
  devServer: {
    // port: 9090,
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.(eot|md|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  // entry: ['react-hot-loader/patch', './src'],
  // webpack: {
  //   alias: { 'react-dom': '@hot-loader/react-dom' },
  // },
};
