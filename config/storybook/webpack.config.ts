import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoader';
import { BuildMode, BuildPaths } from '../types/config';
import webpack from 'webpack';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';
import { RuleSetRule } from 'webpack';
import { buildPlugin } from '../build/buildPlugins';

export default ({ config }: { config: webpack.Configuration }) => {
    const mode: BuildMode = config.mode || 'development';

    const isDev = mode === 'development';
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/.svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.plugins.push(
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
        })
    );
    config.module.rules.push(buildCssLoaders(true));
    config.module.rules.push(buildSVGLoader());
    return config;
};
