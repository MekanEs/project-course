import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from '../types/config';

export function buildDevServer(optyions: BuildOptions): DevServerConfiguration {
  return {
    port: optyions.port,
    open: true,
    historyApiFallback:true,
  };
}
