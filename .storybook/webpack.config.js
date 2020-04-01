module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
            },
            // Optional
            {
                loader: require.resolve('react-docgen-typescript-loader'),
            },
        ],
    });

    config.module.rules.push({
        test: /\.story\.tsx$/,
        loaders: [
            {
                loader: require.resolve('@storybook/source-loader'),
                options: { parser: 'typescript' },
            },
        ],
        enforce: 'pre',
    });

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
