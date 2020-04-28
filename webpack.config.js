/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const SocialMetaTags = require('social-tags-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const Dotenv = require('dotenv-webpack');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const CircularDependencyPlugin = require('circular-dependency-plugin');

const appIcons = [
    'icon-72x72.png',
    'icon-96x96.png',
    'icon-128x128.png',
    'icon-144x144.png',
    'icon-152x152.png',
    'icon-192x192.png',
    'icon-384x384.png',
    'icon-512x512.png',
];

const pwaManifest = new WebpackPwaManifest({
    inject: true,
    ios: true,
    name: 'Passwords fountain',
    short_name: 'Passwords fountain',
    description: 'Minimalistic & modern password manager interface',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
    icons: [
        ...appIcons.map(iconName => ({
            src: path.resolve(`src/assets/appIcons/${iconName}`),
            size: iconName.split('-')[1].split('.')[0],
        })),
    ],
});

const htmlPluginSetup = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/assets/appIcons/favicon-16x16.png',
});

const socialMetaTags = new SocialMetaTags({
    appUrl: 'TODO://DOMAIN',
    facebook: {
        'og:url': 'TODO://DOMAIN',
        'og:type': 'website',
        'og:title': 'Passwords fountain',
        'og:image': './src/assets/appIcons/icon-512x512.png',
        'og:description': 'Minimalistic & modern password manager interface',
        'og:site_name': 'Passwords fountain',
        'og:article:author': 'Marcin Kołodziejczak',
    },
    twitter: {
        'twitter:card': 'Passwords fountain',
        'twitter:creator': '@kolodziejczakMn',
        'twitter:url': 'TODO://DOMAIN',
        'twitter:title': 'Passwords fountain',
        'twitter:description':
            'Minimalistic & modern password manager interface',
        'twitter:image': './src/assets/appIcons/icon-512x512.png',
    },
});

const development = {
    entry: './src/index.tsx',
    mode: 'development',
    name: 'dev', // used in npm scripts
    output: {
        filename: 'bundle.js',
    },
    devtool: 'eval',
    stats: {
        colors: true,
        entrypoints: false,
        modules: false,
    },
    devServer: {
        hot: true,
        historyApiFallback: {
            disableDotRule: true,
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(webp|svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new CspHtmlWebpackPlugin(),
        socialMetaTags,
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        pwaManifest,
        new OfflinePlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
        }),
    ],
};

const production = {
    ...development,
    devServer: undefined,
    mode: 'production',
    name: 'prod',
    devtool: 'source-maps',
    plugins: [
        new CleanWebpackPlugin(),
        htmlPluginSetup,
        new CspHtmlWebpackPlugin(),
        socialMetaTags,
        new Dotenv(), // TODO: when released - will be provided via hosting service instead of .env file
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/app', '/settings'], // These pages will be pre-rendered
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                keepClosingSlash: true,
                sortAttributes: true,
            },
            renderer: new Renderer({
                injectProperty: 'prerendering',
                inject: true,
            }),
        }),
        pwaManifest,
        new OfflinePlugin(),
    ],
};

module.exports = [development, production];
