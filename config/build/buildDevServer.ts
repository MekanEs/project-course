import { type Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from '../types/config';

export function buildDevServer (optyions: BuildOptions): DevServerConfiguration {
  return {
    hot: true,
    port: optyions.port,
    historyApiFallback: true,
  };
}
