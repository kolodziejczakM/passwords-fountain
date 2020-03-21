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
    presets: [
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
    ],
};
