const path = require('path');
const configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        alias: {
            'react-figma': path.resolve(__dirname, '../../src')
        }
    }
});
