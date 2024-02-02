module.exports = {
    settings: {
        react: {
            createClass: 'createReactClass',
            fragment: 'Fragment',
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'i18next'],
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-uses-react': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['js', 'jsx', 'tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/semi': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-dynamic-delete': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/display-name': 'off',
        'i18next/no-literal-string': [2, { markupOnly: true, ignoreAttribute: ['data-testid'] }],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 0,
            },
        },
    ],
};
