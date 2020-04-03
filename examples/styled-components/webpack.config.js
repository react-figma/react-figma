const path = require('path');
const configure = require('react-figma-webpack-config');

module.exports = configure({
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react/'),
            'react-figma': path.resolve(__dirname, './node_modules/react-figma/')
        }
    }
});
