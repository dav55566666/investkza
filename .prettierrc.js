module.exports = {
    jsxBracketSameLine: false,
    jsxSingleQuote: false,
    proseWrap: 'always',
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    useTabs: false,
    tabWidth: 4,
    bracketSpacing: true,
    printWidth: 120,
    arrowParens: 'always',
    importOrder: [
        '^(react|clsx$)', // react related packages
        '^[./].*(?<!svg|style)$', // local imports without SVGs and style files
        '^[./].*(?<!style)$', // SVGs
        '^[./].*scss$', // scss files
    ],
    importOrderSeparation: true,
    experimentalBabelParserPluginsList: ['jsx'],
};
