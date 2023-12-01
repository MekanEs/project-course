import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildPaths } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildPlugin(paths: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenhash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ];
}
