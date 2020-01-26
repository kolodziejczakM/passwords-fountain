module.exports = {
    plugins: [
        '@babel/proposal-class-properties',
        [
            '@babel/plugin-transform-react-jsx',
            {
                pragma: 'h',
            },
        ],
    ],
    presets: [['@babel/typescript', { jsxPragma: 'h' }], '@babel/preset-env'],
};
