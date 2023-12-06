import path from 'path';
import { buildCssLoaders } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../types/config';
import type webpack from 'webpack';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';
import { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
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
    config.module.rules.push(buildCssLoaders(true));
    config.module.rules.push(buildSVGLoader());
    return config;
};
