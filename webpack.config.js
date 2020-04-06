/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const Dotenv = require('dotenv-webpack');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
        contentBase: './dist',
        hot: true,
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
                test: /\.(svg|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new Dotenv(),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackPwaManifest({
            name: 'Passwords fountain',
            short_name: 'PasswordsFountain',
            description: 'Minimalistic & modern password manager',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
            icons: [],
        }),
        new OfflinePlugin(),
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            routes: ['/', '/about-me'], // These pages will be pre-rendered
            minify: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                decodeEntities: true,
                keepClosingSlash: true,
                sortAttributes: true,
            },
            renderer: new Renderer(),
        }),
        new WebpackPwaManifest({
            name: 'Passwords fountain',
            short_name: 'PasswordsFountain',
            description: 'Minimalistic & modern password manager',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
            icons: [],
        }),
        new OfflinePlugin(),
    ],
};

module.exports = [development, production];
