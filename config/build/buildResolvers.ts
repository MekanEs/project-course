import { type BuildOptions } from '../types/config';
import type webpack from 'webpack';

export function buildResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.js', '.tsx', '.ts'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
