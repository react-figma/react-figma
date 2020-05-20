module.exports = (env, argv) => ({
    mode: 'development',

    devtool: 'inline-source-map',

    entry: {
        code: './src/ui.tsx' // The entry point for your UI code
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

            // Enables including CSS by doing "import './file.css'" in your TypeScript code
            { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },

            // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
            { test: /\.(png|jpg|gif|webp|svg|zip)$/, loader: [{ loader: 'url-loader' }] }
        ]
    },

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-figma$': '../../../src',
            'react-figma/rpc$': '../../../src/rpc'
        }
    },

    output: {
        filename: '[name].js',
        publicPath: 'http://localhost:8080/'
    },

    devServer: {
        sockPort: 8080,
        allowedHosts: ['*'],
        watchOptions: { aggregateTimeout: 300, poll: 1000 },
        disableHostCheck: true,
        hot: true,
        injectHot: true,
        injectClient: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
        }
    }
});
