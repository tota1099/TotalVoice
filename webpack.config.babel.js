import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  mode: 'development',
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'TotalVoiceApi',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include },
    ],
  },
};
