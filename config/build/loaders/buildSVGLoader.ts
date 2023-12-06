import type webpack from 'webpack';

export function buildSVGLoader(): webpack.RuleSetRule {
    const SVGLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    return SVGLoader;
}
