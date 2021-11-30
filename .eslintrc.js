module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'react-hooks', 'prettier'],
    rules: {
        'no-console': ['warn', { allow: ['info', 'groupCollapsed', 'groupEnd', 'error'] }],
        'react/prop-types': 'off',
        'no-use-before-define': ['error', 'nofunc'],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
