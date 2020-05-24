var configure = require('react-figma-webpack-config/hmr');

module.exports = configure({
    resolve: {
        alias: {
            'react-figma$': '../../../src',
            'react-figma/rpc$': '../../../src/rpc'
        }
    }
});
