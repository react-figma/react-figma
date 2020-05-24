var configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        alias: {
            'react-figma$': '../../../src',
            'react-figma/rpc$': '../../../src/rpc'
        }
    }
});
