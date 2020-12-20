var configure = require('react-figma-webpack-config');

module.exports = configure({
    module: {
        rules: [
            // ...
            {
                test: /\.mdx?$/,
                use: ['babel-loader', '@mdx-js/loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-figma$': '../../../src',
            'react-figma/rpc$': '../../../src/rpc'
        }
    }
});
