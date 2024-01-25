import type webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoader';
import { buildSVGLoader } from './loaders/buildSVGLoader';

export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    // const babelLoader = {
    //     test: /\.(js|jsx|tsx)$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: ['@babel/preset-env'],
    //         },
    //     },
    // };
    // TODO: How to get faster build
    const swcLoader = {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'swc-loader',
            options: {
                parseMap: true,
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = buildSVGLoader();

    const cssLoader = buildCssLoaders(isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };
    return [swcLoader, cssLoader, svgLoader, fileLoader];
}
