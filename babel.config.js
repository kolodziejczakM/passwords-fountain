const plugins = [
    '@babel/proposal-class-properties',
    [
        '@babel/plugin-transform-react-jsx',
        {
            pragma: 'h',
        },
    ],
];

const presets = [
    ['@babel/typescript', { jsxPragma: 'h' }],
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current', // this solves: "ReferenceError: regeneratorRuntime is not defined"
            },
            bugfixes: true,
        },
    ],
];

module.exports = {
    plugins,
    presets,
};
