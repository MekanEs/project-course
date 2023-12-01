import webpack from 'webpack';

import { buildLoaders } from './buildLoaders';
import { buildPlugin } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from '../types/config';
import { buildDevServer } from './buildDevServer';
export function buildConfig(options: BuildOptions): webpack.Configuration {
  return {
    mode: options.mode,
    module: {
      rules: buildLoaders(options.isDev),
    },
    devtool: options.isDev ? 'inline-source-map' : undefined,
    devServer: buildDevServer(options),
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugin(options.paths),
    resolve: buildResolvers(),
  };
}
