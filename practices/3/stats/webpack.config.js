import Statoscope from '@statoscope/webpack-plugin';

export default {
  entry: "./src/index.jsx",
  devtool: false,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "swc-loader",
      },
    ],
  },
  plugins: [new Statoscope.default()],
};
