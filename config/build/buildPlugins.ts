import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildOptions, type BuildPaths } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugin(paths: BuildPaths, options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { isDev, apiURL } = options;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),

        new webpack.ProgressPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),

        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
            _API_URL_: JSON.stringify(apiURL),
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new ReactRefreshWebpackPlugin(),
            new BundleAnalyzerPlugin({ openAnalyzer: false })
        );
    }
    return plugins.filter(Boolean);
}
