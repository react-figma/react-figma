
const path = require('path')

module.exports = (env, argv) => ({
    mode: argv.mode === 'production' ? 'production' : 'development',

    // This is necessary because Figma's 'eval' works differently than normal eval
    devtool: argv.mode === 'production' ? false : 'inline-source-map',

    entry: {
        code: './src/code.tsx', // The entry point for your plugin code
    },

    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

            // Enables including CSS by doing "import './file.css'" in your TypeScript code
            { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },

            // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
            { test: /\.(png|jpg|gif|webp|svg|zip)$/, loader: [{ loader: 'url-loader' }] },
        ],
    },

    // Webpack tries these extensions for you if you omit the extension like "import './file'"
    resolve: { extensions: ['.tsx', '.ts', '.jsx', '.js'] },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'), // Compile into a folder called "dist"
    }
})
