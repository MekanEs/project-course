import webpack from 'webpack';
import path from 'path';

import { BuildMode, BuildPaths, EnvOptions } from './config/types/config';
import { buildConfig } from './config/build/buildConfig';

export default (env: EnvOptions) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'index.html'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };
    const mode: BuildMode = env.mode || 'development';

    const isDev = mode === 'development';

    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });
    return config;
};
