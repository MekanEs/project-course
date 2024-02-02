import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { type BuildPaths } from '../types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugin(paths: BuildPaths, isDev: boolean): webpack.WebpackPluginInstance[] {
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
        }),
        new BundleAnalyzerPlugin({ openAnalyzer: false }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin());
    }
    return plugins.filter(Boolean);
}
